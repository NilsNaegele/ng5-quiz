import { Injectable } from '@angular/core';

import { QUESTIONS } from './mock-questions';
import { Question } from './question';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class QuizService {

  constructor() { }

  getQuestions(): Question[] {
    return QUESTIONS;
  }

  getQuestionsObservable(): Observable<Question[]> {
    return of(QUESTIONS);
  }

}
