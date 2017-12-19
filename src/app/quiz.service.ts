import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { QUESTIONS } from './mock-questions';
import { Question } from './question';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  getQuestions(): Question[] {
    return QUESTIONS;
  }

  getJSQuestions(url: string): Observable<any[]> {
    return this.http.get(url)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json() || 'Error fetching data'));
  }

  getAllJSQuestions(): any[] {
    return [
      { id: '../assets/data/javascript1.json', name: 'JAVASCRIPT 1' },
      { id: '../assets/data/javascript2.json', name: 'JAVASCRIPT 2' },
      { id: '../assets/data/javascript3.json', name: 'JAVASCRIPT 3' }
    ];
  }

}
