import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import * as firebase from 'firebase';

import { User } from './models/user';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class UserService {

  authState = null;
  private usersObjectRef: AngularFireObject<any>;
  private currentUserSubject = new BehaviorSubject<any>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();


  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
            this.usersObjectRef = db.object('users');
            this.afAuth.authState.subscribe((auth) => {
              this.authState = auth;
              this.setAuthenticated(auth);
            });
  }

  setAuthenticated(user) {
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  getAuthenticated(): boolean {
    return this.authState !== null;
  }

  getCurrentUser(): any {
    return this.getAuthenticated ? this.authState : null;
  }

  getCurrentUserId(): string {
    return this.getAuthenticated() ? this.authState.uid : '';
  }

  login(email: string, password: string): Promise<any> {
    if (!email || !password) {
      return;
    }
   return  this.afAuth.auth.signInWithEmailAndPassword(email, password)
                    .then((user) => {
                      return 'success';
                    })
                    .catch((error) => {
                      return error;
                    });
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

  register(email: string, password: string, name: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                           .then((user) => {
                             this.updateUserData(email, name);
                             return 'success';
                           })
                           .catch((error) => {
                             return error;
                           });
  }

  update(user: User) {
    return this.usersObjectRef.update(user).then((response) => response)
                              .catch((error) => console.log(error));
  }

  private updateUserData(email: string, name: string): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
      const path = `users/${this.getCurrentUserId()}`; // Endpoint on firebase
      const data = {
                    email: email,
                    displayName: name
                  };

      this.usersObjectRef.update(data)
      .catch(error => console.log(error));

      // let profileData = {
      //   displayName: data.firstName + ' ' + data.lastName,
      //   photoURL: data.avatar
      // };
      // this.auth.updateProfile(profileData).then( () => {
      //     console.info('auth profile data has been updated');
      // })

    }




}
