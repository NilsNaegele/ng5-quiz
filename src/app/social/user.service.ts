import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class UserService {

  authState: any = null;

constructor(private afAuth: AngularFireAuth) {
            this.afAuth.authState.subscribe((auth) => {
              this.authState = auth;
            });
  }

  getAuthenticated(): boolean {
    return this.authState !== null;
  }

  getCurrentUser(): any {
    return this.getAuthenticated ? this.authState : null;
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

  register(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                           .then((user) => {
                             return 'success';
                           })
                           .catch((error) => {
                             return error;
                           });
  }


}
