import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from './models/question';
import { Answer } from './models/answer';

import { Quiz2Service } from './quiz2.service';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css']
})
export class Quiz2Component implements OnInit {
  isResultsView = false;
  constructor(public quiz2Service: Quiz2Service) { }

  ngOnInit() {
    this.quiz2Service.initializeQuestions();
  }

  answerChosen(index) {
    if (!this.quiz2Service.isLastQuestion(index)) {
      this.quiz2Service.addAnswer(index);
    } else {
      this.quiz2Service.addAnswer(index);
      this.isResultsView = true;
    }
  }

}
