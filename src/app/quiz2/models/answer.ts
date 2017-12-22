import { Question } from './question';

export class Answer {
  value: string;
  nextQuestion: Question;
  isCorrect: boolean;

  constructor(value: string, nextQuestion?: Question, isCorrect?: boolean) {
    this.value = value;
    this.nextQuestion = nextQuestion;
    this.isCorrect = isCorrect;
  }

}
