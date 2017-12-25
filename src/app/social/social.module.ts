import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from '../social/social-routing.module';
import { MaterialModule } from '../material.module';

import { SocialComponent } from '../social/social.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SettingsComponent } from './settings/settings.component';
import { EditorComponent } from './editor/editor.component';
import { ArticleComponent } from './article/article.component';

import { ShowAuthenticatedDirective } from './show-authenticated.user';
import { MarkedPipe } from './marked.pipe';

import { UserService } from './user.service';
import { TagsService } from './tags.service';
import { ArticlesService } from './articles-service';
import { AuthGuard } from './auth-guard.service';
import { JwtService } from './jwt.service';
import { EditableArticleResolver } from './editable-article.resolver';
import { ArticleResolver } from './article.resolver';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SocialRoutingModule
  ],
  declarations: [
    SocialComponent,
    AuthenticationComponent,
    ArticleListComponent,
    ShowAuthenticatedDirective,
    SettingsComponent,
    EditorComponent,
    ArticleComponent,
    MarkedPipe
  ],
  exports: [ ShowAuthenticatedDirective ],
  providers: [ UserService, TagsService, ArticlesService,
               JwtService, AuthGuard, EditableArticleResolver, ArticleResolver ]
})
export class SocialModule { }
