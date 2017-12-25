import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticlesService {

  private articlesObjectRef: AngularFireObject<any>;
  private articlesObject: Observable<any>;
  private articlesRef: AngularFireList<any>;
  private articles: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.articlesObjectRef = db.object('articles');
    this.articlesObject = this.articlesObjectRef.valueChanges();
    this.articlesRef = db.list('/articles/articles');
    this.articles = this.articlesRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
    });
  }

  save(article: any) {
    this.articlesObjectRef.set({ article });
  }

  create(article: any) {
    return this.articlesRef.push(article);
  }

  update(newSize: string) {
    this.articlesObjectRef.update({ size: newSize });
  }

  delete() {
    this.articlesObjectRef.remove();
  }


  getAllArticles(): Observable<any[]> {
    return this.articles;
  }

  getArticleById(articleId): Observable<any> {
    return this.articles.map(articles => {
      return articles.filter(article => article.key === articleId);
    });

  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

}


