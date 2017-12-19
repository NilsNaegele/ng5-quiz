import { Component, OnInit } from '@angular/core';

import { Option } from '../models/option';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { QuizConfiguration } from '../models/quiz-configuration';
import { QuizService } from '../quiz.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0) scale(0.99)'})),
      transition('* => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      state('out', style({transform: 'translateX(0) scale(1.07)'})),
      transition('* => *', [
        animate(1000)
      ])
    ])
  ]
})
export class AlphaComponent implements OnInit {
 quizzes: any[];
  quiz = new Quiz(null);
  quizName = '';
  mode = 'quiz';

  state = 'in';


  configuration: QuizConfiguration = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,
    'duration': 0,
    'pageSize': 1,
    'requiredAll': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showPager': true
  };

  pager = {
    index: 0,
    size: 1,
    count: 0
  };

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizzes = this.quizService.getAllJSQuestions();
    this.quizName = this.quizzes[0].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName) {
    this.quizService.getJSQuestions(quizName).subscribe(response => {
      this.quiz = new Quiz(response);
      this.pager.count = this.quiz.questions.length;
    });
    this.mode = 'quiz';
    this.pager.index = 0;
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
        this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size)
        : [];
      }

  onSelect(question: Question, option: Option) {
      if (question.questionTypeId === 1) {
        question.options.forEach((a) => {
          if (a.id !== option.id) {
            a.selected = false;
          }
        });
      }
      if (this.configuration.autoMove) {
        this.move(this.pager.index + 1);
      }
  }

  move(index: number) {
    if (index >= 0 && index < this.pager.count) {
        this.pager.index = index;
        this.mode = 'quiz';
    }
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

  isAnswered(question: Question) {
    return question.options.find(a => a.selected) ? 'Answered' : 'Not Answered';
  }

  isCorrect(question: Question) {
    return question.options.every(a => a.selected === a.isAnswer) ? 'correct' : 'wrong';
   }

   onSubmit() {
     const answers = [];
     this.quiz.questions.forEach(a => answers.push({ 'quizId': this.quiz.id, 'questionId': a.id, 'answered': a.answered}));
      console.log(this.quiz.questions);
      this.mode = 'result';
    }

    restart() {
      this.loadQuiz(this.quizName);
    }

}
