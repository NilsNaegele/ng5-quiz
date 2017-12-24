import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from './../articles-service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  results: any;
  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.runQuery();
  }


  runQuery() {
    this.results = this.articleService.getAllArticles();
  }
}
