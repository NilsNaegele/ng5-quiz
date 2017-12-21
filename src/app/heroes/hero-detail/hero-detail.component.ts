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
                              this.hero = hero;
                        });
                      }
                });
               }
      like(hero: Hero) {
        // return new Promise((resolve, reject) => {
        //     this.heroesService.like(hero).subscribe(() => {
        //       this.canVote = this.heroesService.checkIfUserCanVote();
        //       resolve(true);
        //     }, (error) => {
        //       reject(error);
        //     });
        // });
      }

      navigateTop() {
        this.router.navigate(['/top-heroes']);
      }

      back() {
        this.location.back();
      }


}
