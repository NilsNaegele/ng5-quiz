import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleListConfig } from './models/article-config-model';
import { TagsService } from './tags.service';
import { UserService } from './user.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  isAuthenticated = false;
  articleListConfig = new ArticleListConfig();
  tags: Observable<any[]>;
  tagsLoaded = false;

  constructor(private router: Router,
              private tagsService: TagsService,
              private userService: UserService) { }

  ngOnInit() {
    // if (this.userService.getAuthenticated()) {
    //   this.isAuthenticated = true;
    //   console.log(this.userService.getAuthenticated());
    //   if (this.isAuthenticated) {
    //     this.setListTo('feed');
    //   } else {
        this.setListTo('all');
    //   }
    // }
    this.getAllTags();
  }

  getAllTags() {
    this.tags = this.tagsService.getAllTags();
    this.tagsLoaded = true;
  }

  setListTo(type: string = '', filters: Object = {}) {
    console.log(type, this.isAuthenticated);
    console.log(type, filters);
    if (type === 'feed' && !this.isAuthenticated) {
        this.router.navigateByUrl('/social/login');
        return;
    }

    this.articleListConfig = { type: type, filters: filters };
  }

}
