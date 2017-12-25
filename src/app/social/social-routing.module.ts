import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditableArticleResolver } from './editable-article.resolver';

import { SocialComponent } from '../social/social.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth-guard.service';
import { EditorComponent } from './editor/editor.component';

const socialRoutes: Routes = [
  { path: '', component: SocialComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'register', component: AuthenticationComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuard] },
  { path: 'editor/:title', component: EditorComponent, canActivate: [AuthGuard],
                          resolve: {
                            article: EditableArticleResolver
                          } },
  // { path: '**', redirectTo: 'social', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forChild(socialRoutes)],
  exports: [ RouterModule ]
})
export class SocialRoutingModule { }
