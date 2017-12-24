import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagsService {

  private tagsRef: AngularFireList<any>;
  private tags: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.tagsRef = db.list('/tags');
    this.tags = this.tagsRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
    });
  }


  getAllTags(): Observable<any[]> {
    return this.tags;
  }

  getTagById(tagId): Observable<any> {
    return this.tags.map(apps => {
      return apps.filter(app => app.key === tagId);
    });

  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

}
