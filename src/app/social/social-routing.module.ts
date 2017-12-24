import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocialComponent } from '../social/social.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const socialRoutes: Routes = [
  { path: '', component: SocialComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'register', component: AuthenticationComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(socialRoutes)],
  exports: [ RouterModule ]
})
export class SocialRoutingModule { }
