import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero;
  canVote = true;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private router: Router,
              private heroesService: HeroesService) {
               this.activatedRoute.params.subscribe((params: any) => {
                      if (params['id']) {
                        this.heroesService.getHeroById(params['id'])
                                          .subscribe((hero: Hero) => {
                                  if (Object.keys(hero).length === 0) {
                                      this.navigateTop();
                                  }
                                  this.hero = hero;

                        });
                      }
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

      navigateTop() {
        this.router.navigate(['/top-heroes']);
      }

      back() {
        this.location.back();
      }


}
