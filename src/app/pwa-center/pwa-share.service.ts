import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';

@Injectable()
export class ShareService {

  constructor(private db: AngularFireDatabase) { }

  create(pwa: any, callback?: any): void {
    this.db.object('/pwas/' + pwa.id).set(pwa).then((success: any) => {
      if (callback) {
        callback(null, pwa);
      }
    })
    .catch((error: any) => {
      if (callback) {
        callback(error, null);
      }
    });
  }

  getManifest(url: string): Observable<any> {
    return this.handleError(null);
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }

  private handleSuccess(response) {
    return JSON.parse(response);
  }

}

