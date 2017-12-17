import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidenavService {

  // observable string sources

  private open = new Subject<boolean>();
  private close = new Subject<boolean>();

  // observable string streams
  open$ = this.open.asObservable();
  close$ = this.close.asObservable();

  // service message commands
  publishOpen(toOpen: boolean) {
    this.open.next(toOpen);
  }

  publishClose(toClose: boolean) {
    this.close.next(toClose);
  }

}
