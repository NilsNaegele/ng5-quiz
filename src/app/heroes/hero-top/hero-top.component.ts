import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';
import { ProgressBarService } from './../../shared/services/progress-bar.service';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-hero-top',
  templateUrl: './hero-top.component.html',
  styleUrls: ['./hero-top.component.css']
})
export class HeroTopComponent {
  heroes: Hero[] = [];
  canVote = false;
  progressBarMode: string;

  constructor(private router: Router,
              private heroesService: HeroesService,
              private progressBarService: ProgressBarService) {
    this.canVote = this.heroesService.checkIfUserCanVote();
    this.heroesService.getAllHeroes().subscribe((heroes) => {
        this.heroes = heroes.sort((a, b) => {
              return b.likes - a.likes;
        }).slice(0, AppConfig.topHeroesLimit);
    });
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
         this.progressBarMode = mode;
    });
  }

  like(hero: Hero) {
    this.canVote = this.heroesService.checkIfUserCanVote();
    if (this.canVote) {
        this.heroesService.like(hero).then(() => {
        console.log('returned like success');
        }, (error) => {
          console.log('returned error: ' + error);
        });
  }
}

  seeHeroDetails(hero): void {
    if (hero.default) {
      this.router.navigate(['heroes/' + hero.id]);
      // this.router.navigate[AppConfig.routes.heroes + '/' + hero.id];
    }
  }

}
