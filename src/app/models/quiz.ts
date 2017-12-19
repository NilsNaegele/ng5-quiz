import { QuizConfiguration } from './quiz-configuration';
import { Question } from './question';

export class Quiz {
  id: number;
  name: string;
  description: string;
  configuration: QuizConfiguration;
  questions: Question[];

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.configuration = new QuizConfiguration(data.configuration);
      this.questions = [];
      data.questions.forEach(question => {
          this.questions.push(new Question(question));
      });
    }
  }


}
