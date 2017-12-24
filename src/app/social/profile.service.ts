import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList,
         AngularFireObject } from 'angularfire2/database';


import { Profile } from './models/profile';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  profileRef: AngularFireList<any>;
  profileRefObject: AngularFireObject<any>;
  profiles: Observable<any>;
  key = '';

  constructor(private db: AngularFireDatabase) {
    this.profileRef = db.list('/profiles');
    this.profileRefObject = db.object('profiles');
    this.profiles = this.profileRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
    });
   }

   create(profile: any) {
     return this.profileRef.push(profile);
   }

   getAllHeroes(): Observable<Profile[]> {
     return this.profiles;
   }

   getProfileById(profileId): Observable<Profile> {
     return this.profiles.map(profiles => {
       return profiles.filter(hero => hero.key === profileId);
     });

   }

   updateProfile(profileId: string, profile) {
     return this.profileRef.update(profileId, profile);
   }

   delete(profileId: number) {
      return this.profileRef.remove(profileId + '');
   }


   private handleError(error: any) {
     if (error instanceof Response) {
       return Observable.throw(error.json()['error'] || 'backend server error');
     }
     return Observable.throw(error || 'backend server error');
   }

}
