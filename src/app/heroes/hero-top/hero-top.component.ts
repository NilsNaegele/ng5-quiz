import { Component } from '@angular/core';

import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-hero-top',
  templateUrl: './hero-top.component.html',
  styleUrls: ['./hero-top.component.css']
})
export class HeroTopComponent {

  heroes: Hero[] = [];
  canVote = false;

  constructor(private heroesService: HeroesService) {
    this.canVote = this.heroesService.checkIfUserCanVote();

    this.heroesService.getAllHeroes().subscribe((heroes) => {
        this.heroes = heroes.sort((a, b) => {
              return b.likes - a.likes;
        }).slice(0, AppConfig.topHeroesLimit);
    });

  }

  like(hero: Hero) {
    // return new Promise((resolve, reject) => {
    //   this.heroesService.like(hero).subscribe(() => {
    //         this.canVote = this.heroesService.checkIfUserCanVote();
    //         resolve(true);
    //   }, (error) => {
    //     reject(error);
    //   });
    // });
  }

}
