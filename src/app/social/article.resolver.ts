import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

import { Article } from './models/article.model';
import { ArticlesService } from './articles-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class ArticleResolver implements Resolve<Article> {

  constructor(private articlesService: ArticlesService,
              private userService: UserService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.articlesService.getArticleById(route.params['slug'])
               .catch((error) => this.router.navigateByUrl('/social'));
  }

}
