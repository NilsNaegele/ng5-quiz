import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { LoggerService } from '../logger.service';
import { AppConfig } from '../../config/app.config';
import { HeroesService } from '../../heroes/heroes.service';
import { Hero } from '../../heroes/hero.model';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [ HeroesService ]
})
export class SearchBarComponent {
  defaultHeroes: Array<Hero> = [];
  heroFormControl: FormControl;
  filteredHeroes: any;
  heroesAutocomplete: any;

  constructor(private router: Router, private heroService: HeroesService) {
      // this.heroFormControl = new FormControl();

      // this.heroService.getAllHeroes().subscribe((heroes: Array<Hero>) => {
      //   this.defaultHeroes = heroes.filter(hero => hero['default']);

      //   this.heroFormControl.valueChanges.startWith(null)
      //                   .map(value => this.filteredHeroes(value))
      //                   .subscribe(heroesFiltered => {
      //                       this.filteredHeroes = heroesFiltered;
      //                   });
      // });
  }

  filterHeroes(val: string): Hero[] {
    return val ? this.defaultHeroes
    .filter(hero => hero.name.toLowerCase().indexOf(val.toLowerCase()) === 0 && hero['default'])
    : this.defaultHeroes;
  }

  searchHeroes(hero: Hero): Promise<boolean> {
    LoggerService.log('Moved to hero with id: ' + hero.id);
    return this.router.navigate([AppConfig.routes.heroes + '/' + hero.id]);
  }


}
