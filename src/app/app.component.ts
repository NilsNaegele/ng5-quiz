import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './sidenav.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sideNavSubscription: Subscription;

  constructor(private sidenavService: SidenavService) {
    this.sideNavSubscription = sidenavService.open$.subscribe(toOpen => {
      if (toOpen) {
        this.sidenav.open();
      }
    });
  }

  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe();
  }




}
