import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PwaService {

  private appsRef: AngularFireList<any>;
  private appsRefObject: AngularFireObject<any>;
  private apps: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.appsRef = db.list('/pwas');
    this.appsRefObject = db.object('pwas');
    this.apps = this.appsRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
    });
  }


  getAllApps(): Observable<any[]> {
    return this.apps;
  }

  getAppById(appId): Observable<any> {
    return this.apps.map(apps => {
      return apps.filter(app => app.key === appId);
    });

  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

}
