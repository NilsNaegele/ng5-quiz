import { Injectable, EventEmitter } from '@angular/core';
import { HeroesService } from '../../heroes/heroes.service';

@Injectable()
export class ProgressBarService {
  updateProgressBar$: EventEmitter<any>;

  private requestsRunning = 0;

  constructor(private heroesService: HeroesService) {
    this.updateProgressBar$ = new EventEmitter();

    this.heroesService.request$.subscribe((type: string) => {
        if (type === 'starting') {
          this.requestsRunning++;
          if (this.requestsRunning === 1) {
            this.updateProgressBar$.emit('query');
          }
        }
        if (this.requestsRunning > 0) {
          this.requestsRunning--;
          if (this.requestsRunning === 0) {
            this.updateProgressBar$.emit('none');
          }
        }
    });
  }

}
