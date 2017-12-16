import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { QUESTIONS } from '../mock-questions';
import { trigger, transition, style, state, animate, stagger, query, useAnimation } from '@angular/animations';
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../app.route-animations';

import { QuizService } from '../quiz.service';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ]),
    trigger('technologyState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.2)'})),
      transition('inactive => active', animate('900ms ease-in')),
      transition('active => inactive', animate('900ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]
})
export class QuizComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animationPage = true;
  state = 'active';
  private questions: Question[] = [];
  private totalQuestions = 20;
  private showNextButton = false;
  private counter = 0;
  private score = 0;
  question: Question;
  showQuizCompleted = false;
  result = 0;

  constructor(private router: Router, private quizService: QuizService) { }

  retakeQuiz() {
    this.router.navigate(['/home']);
  }

  answered(index: number, checked: boolean) {
      if (this.showNextButton) { return; }
      this.showNextButton = true;
      if (index === this.question.correct) {
        this.score += 1;
      }
  }

  next() {
    this.showNextButton = false;
    this.state = this.state === 'active' ? 'inactive' : 'active';
    this.question = this.questions[this.counter++];
    if (this.counter === 21) {
      this.showQuizCompleted = true;
      this.result = (this.score / this.totalQuestions) * 100;
    }

  }

  ngOnInit() {
    this.getQuestions();
    this.question = this.questions[this.counter++];
  }

  getQuestions(): void {
   this.questions = this.quizService.getQuestions();
  }

}
