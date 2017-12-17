import { Injectable } from '@angular/core';

import { Technology } from './technology';
import { TECHNOLOGIES } from './mock-technologies';

import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TechnologyService {

  constructor(private messageService: MessageService) { }

  getTechnologies(): Observable<Technology[]> {
    // this.messageService.add('TechnologyService: fetched technologies');
    return of(TECHNOLOGIES);
  }

  getTechnology(id: number): Observable<Technology> {
    this.messageService.add(`TechnologyService: fetched technology id=${id}`);
    return of(TECHNOLOGIES.find(technology => technology.id === id));
  }

}
