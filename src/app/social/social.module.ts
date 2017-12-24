import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from '../social/social-routing.module';
import { MaterialModule } from '../material.module';


import { SocialComponent } from '../social/social.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { UserService } from './user.service';
import { TagsService } from './tags.service';
import { ArticlesService } from './articles-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SocialRoutingModule
  ],
  declarations: [ SocialComponent, AuthenticationComponent, ArticleListComponent ],
  providers: [ UserService, TagsService, ArticlesService ]
})
export class SocialModule { }
