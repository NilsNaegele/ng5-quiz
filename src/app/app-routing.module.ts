import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from './config/app.config';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { ImagesComponent } from './images/images.component';
import { AlphaComponent } from './alpha/alpha.component';
import { HeroTopComponent } from './heroes/hero-top/hero-top.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: TechnologyDetailComponent
  },
  {
    path: 'technologies',
    component: TechnologiesComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'alpha-project',
    component: AlphaComponent
  },
  {
    path: 'top-heroes',
    component: HeroTopComponent
  },
  {
    path: AppConfig.routes.heroes,
    loadChildren: 'app/heroes/heroes.module#HeroesModule'
  },
  {
    path: 'start-coding',
    loadChildren: 'app/quiz2/quiz2.module#Quiz2Module'
  },
  {
    path: 'pwa-center',
    loadChildren: 'app/pwa-center/pwa.module#PwaModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
