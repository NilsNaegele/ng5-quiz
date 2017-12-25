import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocialComponent } from '../social/social.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth-guard.service';
import { EditorComponent } from './editor/editor.component';
import { ArticleComponent } from './article/article.component';

import { EditableArticleResolver } from './editable-article.resolver';
import { ArticleResolver } from './article.resolver';

const socialRoutes: Routes = [
  { path: 'social', component: SocialComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'register', component: AuthenticationComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'editor/:title', component: EditorComponent, canActivate: [AuthGuard],
                          resolve: {
                            article: EditableArticleResolver
                          } },
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuard] },
  { path: 'article/:slug', component: ArticleComponent, resolve: {
    article: ArticleResolver
  }}
  // { path: '**', redirectTo: 'social', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forChild(socialRoutes)],
  exports: [ RouterModule ]
})
export class SocialRoutingModule { }
