import { Injectable } from '@angular/core';
import { Answer } from './models/answer';
import { Question } from './models/question';

@Injectable()
export class Quiz2Service {

  previousQuestions: Question[] = [];
  currentQuestion: Question;
  answers = [];

  results = 0;

  constructor() {
    this.initializeQuestions();
  }


  initializeQuestions() {

    const question10 = new Question(`
    function() {
      let a, b;
      [a, , b] = [,,,];
      return a === undefined && b === undefined;
      }
    `, [
      new Answer('Object static methods', null, false),
      new Answer('Function "name" property', null, false),
      new Answer('Destructuring, assignment', null, true),
      new Answer('String static methods', null, false)
    ]);

    const question9 = new Question(`
    function() {
      let [a, b, c] = (function*(){ yield 1; yield 2; }());
      return a === 1 && b === 2 && c === undefined;
      }
    `, [
      new Answer('Promise', question10, false),
      new Answer('Symbol', question10, false),
      new Answer('Destructuring, declarations', question10, true),
      new Answer('Well-known symbols', question10, false)
    ]);

    const question8 = new Question(`
    function() {
      let re = new RegExp('yy', 'y');
      re.lastIndex = 3;
      let result = re.exec('xxxyyxx')[0];
      return result === 'yy' && re.lastIndex === 5;
      }
    `, [
      new Answer('WeakSet', question9, false),
      new Answer('Proxy', question9, false),
      new Answer('RegExp "y" flag', question9, true),
      new Answer('Reflect', question9, false)
    ]);

    const question7 = new Question(`
    function(){
      var prop = Object.getOwnPropertyDescriptor(Promise, Symbol.species);
      return 'get' in prop && Promise[Symbol.species] === Promise;
      }
    `, [
        new Answer('Map', question8, false),
        new Answer('Set', question8, false),
        new Answer('Promise', question8, true),
        new Answer('WeakMap', question8, false)
      ]);

    const question6 = new Question(`
    function() {
      return Number('0b1') === 1;
      }
    `, [
      new Answer('Super', question7, false),
      new Answer('Generators', question7, false),
      new Answer('Binary literals', question7, true),
      new Answer('Typed arrays', question7, false)
    ]);

    const question5 = new Question(`
    function() {
      let arr = [,,];
      let count = 0;
      for (const item of arr)
        count += (item === undefined);
      return count === 2;
      }
    `, [
      new Answer('Let', question6, false),
      new Answer('Arrow function', question6, false),
      new Answer('For..of loop', question6, true),
      new Answer('Class', question6, false)
    ]);

    const question4 = new Question(`
    function() {
      let x = 'y';
      return ({ [x](){ return 1 } }).y() === 1;
      }
    `, [
      new Answer('Unicode code point escapes', question5, false),
      new Answer('New.target', question5, false),
      new Answer('Object literal extensions', question5, true),
      new Answer('Const', question5, false)
    ]);

    const question3 = new Question(`
    function() {
      let a = [...[,,]];
      return "0" in a && "1" in a && '' + a[0] + a[1] === "undefinedundefined";
      }
    `, [
      new Answer('Destructuring, declarations', question4, false),
      new Answer('Destructuring, assignment', question4, false),
      new Answer('Spread (...) operator', question4, true),
      new Answer('Destructuring, parameters', question4, false)
    ]);

    const question2 = new Question(`
    function() {
      return function(a, ...b){}.length === 1 && function(...c){}.length === 0;
      }
    `, [
      new Answer('Octal and binary literals',  question3, false),
      new Answer('Template literals', question3, false),
      new Answer('RegExp "y" and "u" flags', question3, false),
      new Answer('Rest parameters', question3, true)
    ]);

    const question1 = new Question(`
    function() {
      return new Function("a = 1", "b = 2",
        "return a === 3 && b === 2;"
      )(3);
      }
    `, [
      new Answer('Rest parameters', question2, false),
      new Answer('Spread (...) operator', question2, false),
      new Answer('Default function parameters', question2, true),
      new Answer('For..of loops', question2, false)
    ]);

    this.currentQuestion = question1;
    this.answers = [];
    this.previousQuestions = [];
  }

  addAnswer(answerIndex: number): void {
    const answer = this.currentQuestion.answers[answerIndex];
    this.answers.push(answer.isCorrect);
    this.previousQuestions.push(this.currentQuestion);
    if (!this.isLastQuestion(answerIndex)) {
      this.currentQuestion = this.currentQuestion.answers[answerIndex].nextQuestion;
    } else {
      let result = 0;
      for (let i = 0; i < this.answers.length; i++) {
          result += this.answers[i] ? 1 : 0;
      }
      this.results = (result / this.previousQuestions.length) * 100;
    }
  }

  isLastQuestion(answerIndex): boolean {
    return this.currentQuestion.answers[answerIndex].nextQuestion === null;
  }

  previousQuestion(): void {
    if (this.previousQuestions.length !== 0) {
      this.currentQuestion = this.previousQuestions[this.previousQuestions.length - 1];
      this.answers.pop();
      this.previousQuestions.pop();
    }

  }

}


// const question100 = new Question(`
// `, [
//   new Answer('', false),
//   new Answer('', false),
//   new Answer('', true),
//   new Answer('', false)
// ]);
