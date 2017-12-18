import { Injectable } from '@angular/core';
import { Image } from './image';

@Injectable()
export class ImageService {

  constructor() { }

  images: Image[] = [
    { name: 'berlin1', description: 'Freedom, unity, performance. Work Hard.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1},
    { name: 'berlin2', description: 'Where champions meet. Be kind.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1 },
    { name: 'berlin3', description: 'Everything is possible. Do more.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1 , cols: 1},
    { name: 'berlin4', description: 'There are no limits ...', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1},
    { name: 'berlin5', description: 'I have met my hero, he is me.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1},
    { name: 'berlin6', description: 'Live strong. Work hard. Play hard.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1 , cols: 1},
    { name: 'berlin7', description: 'Code with passion. Code all the time.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1},
    { name: 'berlin8', description: 'We are fearless, ruthless && honest.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1},
    { name: 'berlin9', description: 'I am Berlin, you are Berlin. We are all Berlin.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1},
    { name: 'berlin10', description: 'Freiheit Berlin. Weil es geht in Berlin.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1},
    { name: 'berlin11', description: 'Work hard. Be kind. Do more.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1},
    { name: 'berlin12', description: 'We honor performance and Open Source.', messages: [{what: 'hello baby', content: 'i love you' }], rows: 1, cols: 1}
  ];

  getAllImages(): Image[] {
    return this.images;
  }

}
