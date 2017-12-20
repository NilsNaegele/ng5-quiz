import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  static log(message: string): void {
    console.log(message);
  }

  static error(message: string, obj = {}): void {
    console.error(message, obj);
  }

  constructor() { }

}
