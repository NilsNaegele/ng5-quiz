import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QUESTIONS } from '../mock-questions';

import { QuizService } from '../quiz.service';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
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
      console.log((this.score / this.totalQuestions) * 100 + '%');
  }
  next() {
    this.showNextButton = false;
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
