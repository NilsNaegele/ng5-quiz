import { Question } from './question';


  export const QUESTIONS: Question[] = [
    {
      id: 1,
      title: 'let array = ["M", "Y", "B", "A", "B", "Y"];',
      answers: [
        'array', 'collection', 'object', 'map', 'set'
      ],
      correct: 0
    },
    {
      id: 2,
      title: 'array.forEach((i) => console.log(i));',
      answers: [
        'iteration', 'arrow function', 'console.log', 'index', 'forEach loop'
      ],
      correct: 0
    },
    {
      id: 3,
      title: `
              const numbers = [2, 4, 8];
              const mappedNumbers = numbers.map((x) => x * 2);
              const filteredNumbers = numbers.filter((x) => x % 2 == 0);
              const productOfNumbers = numbers.reduce((x, y) => x * y);
              const sumOfNumbers = numbers.reduce((x, y) => x + y);
      `,
      answers: [
        '[4, 8, 16]', '[8, 16, 32]', '[16, 32, 64]', '[32, 64, 128]', '[64, 128, 256]'
      ],
      correct: 0
    },
    {
      id: 4,
      title: `class Author {
        constructor(public firstName:string,
                    public lastName:string,
                    public yearBorn:number) { }

        getFullName() {
          return this.firstName + " " + this.lastName;
        }
      }`,
      answers: [
        'class', 'constructor', 'method', 'property', 'access modifiers'
      ],
      correct: 0
    },
    {
      id: 5,
      title: `
      interface Number {
        isAnswer: () => boolean;
      }

      Number.prototype.isAnswer = () => {
        if(this === 42) {
          return true;
        } else {
          return false;
        }
      };

      `,
      answers: [
        'extension method', 'interface', 'prototype', 'number', '42'
      ],
      correct: 0
    },
    {
      id: 6,
      title: `
              const numbers = [2, 4, 8];
              const mappedNumbers = numbers.map((x) => x * 2);
              const filteredNumbers = numbers.filter((x) => x % 2 === 0);
              const productOfNumbers = numbers.reduce((x, y) => x * y);
              const sumOfNumbers = numbers.reduce((x, y) => x + y);
      `,
      answers: [
        '[4, 8, 16]', '[8, 16, 32]', '[16, 32, 64]', '[32, 64, 128]', '[64, 128, 256]'
      ],
      correct: 0
    },
    {
      id: 7,
      title: `
      const value = [
        false,
        0,
        "",
        null,
        undefined,
        NaN
      ];
      `,
      answers: [
        'falsy values', 'false', 'null', 'undefined', 'truthy values'
      ],
      correct: 0
    },
    {
      id: 8,
      title: `
      function multiply(x:number, y:number):number {
        return x * y;
      }

      function greetPerson(name:string):string {
        return "Hello " + name;
      }

      function getFinalPrice(amount: number, tax: number = 0.05):number {
        return amount * (1 + tax);
      }
      `,
      answers: [
        'functions', 'methods', 'multiply', 'string', 'optional parameters'
      ],
      correct: 0
    },
    {
      id: 9,
      title: `
      const map:any = {};

      map["Flash"] = "Flash Light";

      map.Marvel = "Count";
      `,
      answers: [
        'hash map', 'array', 'object', 'key', 'iterator'
      ],
      correct: 0
    },
    {
      id: 10,
      title: `
      const hashMap = {
        "Angular 5": 1,
        "Angular CLI 1.6": 2,
        "Angular Material 5": 3,
        "Angular Universal": 4,
        "Angular Progressive Web Apps": 5
      };

      for (const key in hashMap) {
        console.log(key + " " + hashMap[key]);
      }

      `,
      answers: [
        'hash map iteration', 'for in loop', 'constant', 'Angular', 'console.log'
      ],
      correct: 0
    },
    {
      id: 11,
      title: 'console.log("we are fearless, ruthless && honest. we honor angular.");',
      answers: [
        'hello world', 'console.log', 'string', 'instruction', 'array'
      ],
      correct: 0
    },
    {
      id: 12,
      title: `
      if (!booleanValue && stringValue === "Open Source") {

      } else if (booleanValue || intValue == 0) {

      } else {

      }
      `,
      answers: [
        'if statement', 'if else if statement', 'if else if else', 'and operator', 'or operator'
      ],
      correct: 0
    },
    {
      id: 13,
      title: 'const sentence = `${author} published ${count} gitbooks.`;',
      answers: [
        'interpolation', 'constant', 'assignment', 'string', 'number'
      ],
      correct: 0
    },
    {
      id: 14,
      title: `
      function doMath(x:number, y:number, passedFunction:(a:number, b:number) => number) {
        return passedFunction(x, y)
      }

      const answer = doMath(8, 8, (x: number, y: number) => x * y);

      `,
      answers: [
        'lambda', 'arrow function', 'function', 'number', '64'
      ],
      correct: 0
    },
    {
      id: 15,
      title: `
      for (const i = 0; i < 10; i++) {
        console.log(i);
    }

    const count = 0;
    while (count < 10) {
        console.log(count);
        count++;
    }

      `,
      answers: [
        'loop statements', 'for loop', 'while loop', 'incrementor', 'console.log'
      ],
      correct: 0
    },
    {
      id: 16,
      title: `
      function typeSwitch(t: any): string {
        switch (typeof t) {
          case "boolean":
            return "boolean";
          case "number":
            return "number";
          case "string":
            return "string";
          default:
            return "not boolean, number, or string"
        }
      }
      `,
      answers: [
        'switch statement', 'function', 'typeof', 'case', 'default'
      ],
      correct: 0
    },
    {
      id: 17,
      title: `
      const trueValue = true;
      const falseValue = false;
      let trueTernaryResult = trueValue ? "trueResult" : "falseResult";
      let falseTernaryResult = falseValue ? "trueResult" : "falseResult";
      `,
      answers: [
        'ternary operators', 'boolean', 'const', 'variable', 'immutable'
      ],
      correct: 0
    },
    {
      id: 18,
      title: `
      const firstName = "Flash";
      const lastName = "Light";
      let fullName = firstName + " " + lastName;
      const x = 21;
      const y = 21;
      let z = x + y;
      `,
      answers: [
        'variables', 'string', 'number', 'addition', '42'
      ],
      correct: 0
    },
    {
      id: 19,
      title: `
      function f(name: string, ...things: string[]) {
        things.forEach((thing: string) => {
          console.log(name + " likes " + thing + ".");
        });
      }
      f("Flash", "prototyping");
      f("Nils", "coding", "Single Page Applications");
      const likes: string[] = ["calculating", "thinking", "delivering"];
      f("Holger", ...likes);
      `,
      answers: [
        'variadic function', 'destructuring operator', 'forEach loop', 'string array', 'fat arrow function'
      ],
      correct: 0
    },
    {
      id: 20,
      title: `
      import http = require("http");
      function handler(request: http.IncomingMessage, response: http.ServerResponse) {
          response.end("kindness is the most important superpower.");
      }
      var server = http.createServer(handler);
      server.listen(4200);
      `,
      answers: [
        'web server', 'javascript import', 'http', 'request', 'response'
      ],
      correct: 0
    }
  ];
