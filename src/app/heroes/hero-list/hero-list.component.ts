import { RemoveHeroDialogComponent } from './../remove-hero-dialog/remove-hero-dialog.component';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';
import { LoggerService } from '../../core/logger.service';

import { AppConfig } from '../../config/app.config';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  heroes: Hero[];
  newHeroForm: FormGroup;
  canVote = false;
  error = '';
  rowHeight = 650;

  @ViewChild('form') myNgForm;

  constructor(private router: Router,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private heroesService: HeroesService) {
    this.canVote = this.heroesService.checkIfUserCanVote();

    this.newHeroForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'alterEgo': ['', [Validators.required]]
    });

    this.heroesService.getAllHeroes().subscribe((heroes: Hero[]) => {
          this.heroes = heroes.sort((a, b) => {
            return b.likes - a.likes;
          });
    });
    }

    like(hero: Hero) {
      // this.heroesService.like(hero).subscribe(() => {
      //   this.canVote = this.heroesService.checkIfUserCanVote();
      // }, (error: Response) => {
      //   LoggerService.error('maximum votes limit reached', error);
      // });
    }

    createNewHero(newHero: Hero) {
      // this.heroesService.create(newHero).then((newHeroWithId) => {
        this.heroes.push(newHero);
        this.myNgForm.reset();
        this.rowHeight += 100;
      // }, (response: Response) => {
      //   if (response.status === 500) {
      //     this.error = 'errorHasOccured';
      //   }
      // });
    }

    seeHeroDetails(hero): void {
      if (hero.default) {
        // console.log(hero);
        // this.router.navigate[AppConfig.routes.heroes + '/' + hero.id];
      }
    }

    remove(heroToRemove: Hero): void {
      const dialogRef = this.dialog.open(RemoveHeroDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
                if (result) {
                 // this.heroesService.delete(heroToRemove.id).then(() => {
                          this.heroesService.showSnackbar('Hero Removed');
                          this.heroes = this.heroes.filter(hero => hero.name !== heroToRemove.name);
                          this.rowHeight -= 100;
                  // }, (response: Response) => {
                  //   if (response.status === 500) {
                  //     this.error = 'HeroDefault';
                  //   }
                  // });
                }
      });
    }




}
