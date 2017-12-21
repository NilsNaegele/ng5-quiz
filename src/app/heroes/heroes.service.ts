import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { AppConfig } from '../config/app.config';

import { Hero } from './hero.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {
  request$: EventEmitter<any>;

  heroesRef: AngularFireList<any>;
  heroesRefObject: AngularFireObject<any>;
  heroes: Observable<any>;
  key = '';

  constructor(private db: AngularFireDatabase, private snackBar: MatSnackBar) {
    this.heroesRef = db.list('/heroes');
    this.heroesRefObject = db.object('heroes');
    this.heroes = this.heroesRef.snapshotChanges().map(changes => {
      return changes.map(change => ({
        key: change.payload.key,
        ...change.payload.val() }));
    });
    this.request$ = new EventEmitter();
   }

   create(hero: any) {
     this.showSnackbar('Hero Created');
     this.request$.emit('finished');
     return this.heroesRef.push(hero);
   }

   getAllHeroes(): Observable<Hero[]> {
     this.request$.emit('finished');
     return this.heroes;
   }

   getHeroById(heroId): Observable<Hero> {
     return this.heroes.map(heroes => {
       this.request$.emit('finished');
       return heroes.filter(hero => hero.key === heroId);
     });

   }

   like(hero: Hero): Promise<void> {
    if (this.checkIfUserCanVote) {
      localStorage.setItem('votes', '' + (Number(localStorage.getItem('votes')) + 1));
      hero.likes += 1;
      this.showSnackbar('Like Saved');
      this.request$.emit('finished');
      return this.heroesRef.update(hero.id + '', { likes: hero.likes });
      } else {
        this.showSnackbar('Maximum Hero Likes');
      }
    }

    checkIfUserCanVote(): boolean {
      return Number(localStorage.getItem('votes')) < AppConfig.votesLimit;
    }

   updateHero(heroId: string, hero) {
     this.showSnackbar('Hero Updated');
     return this.heroesRef.update(heroId, hero);
   }

   delete(heroId: number) {
      this.showSnackbar('Hero Removed');
      return this.heroesRef.remove(heroId + '');
   }

   showSnackbar(name): void {
     const config: any = new MatSnackBarConfig();
     config.duration = AppConfig.snackBarDuration;
     this.snackBar.open(name, 'OK', config);
   }

   private handleError(error: any) {
     if (error instanceof Response) {
       return Observable.throw(error.json()['error'] || 'backend server error');
     }
     return Observable.throw(error || 'backend server error');
   }

}
