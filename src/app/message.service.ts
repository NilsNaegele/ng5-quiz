import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] =  ['TechnologyService: fetched technologies'];

  add(message: string): void {
    // console.log(message);
    // this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

  constructor() { }

}
