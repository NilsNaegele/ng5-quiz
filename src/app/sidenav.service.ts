import { Injectable } from '@angular/core';
import { Image } from './image';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidenavService {

  // observable string sources
  private open = new Subject<Image>();
  private close = new Subject<boolean>();

  // observable string streams
  open$ = this.open.asObservable();
  close$ = this.close.asObservable();

  // service message commands
  publishOpen(image: Image) {
    this.open.next(image);
  }

  publishClose(toClose: boolean) {
    this.close.next(toClose);
  }

}
