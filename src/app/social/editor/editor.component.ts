import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from './../models/article.model';
import { ArticlesService } from '../articles-service';



@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  article = new Article();
  articleForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private articleService: ArticlesService) {
              this.articleForm = this.fb.group({
                title: '',
                description: '',
                body: ''
              });

               }

  ngOnInit() {
    this.route.data.subscribe((data: { article: Article}) => {
      if (data.article) {
        this.article = data.article;
        this.articleForm.patchValue(data.article);
      }
    });
  }

  addTag() {
    const tag = this.tagField.value;
    if (this.article.tagList.indexOf(tag) < 0) {
      this.article.tagList.push(tag);
    }
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.article.tagList = this.article.tagList.filter((tag) => tag !== tagName);
  }

  updateArticle(values: Object) {
    (<any>Object).assign(this.article, values);
  }

  submitForm() {
    this.isSubmitting = true;
    this.updateArticle(this.articleForm.value);
    this.articleService.create(this.article);
    // this.router.navigateByUrl('/social/editor/' + this.article.title);
  }

}
