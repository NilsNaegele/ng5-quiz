import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BasicLawService {

  private basicLawRef: AngularFireList<any>;
  private basicLawRefObject: AngularFireObject<any>;
  private basicLaw: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.basicLawRef = db.list('/basiclaw');
    this.basicLawRefObject = db.object('basiclaw');
    this.basicLaw = this.basicLawRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
    });
  }


  getAllBasicLaws(): Observable<any[]> {
    return this.basicLaw;
  }

  getBasicLawById(basicLawId): Observable<any> {
    return this.basicLaw.map(bLaw => {
      return bLaw.filter(law => law.key === basicLawId);
    });

  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

}
