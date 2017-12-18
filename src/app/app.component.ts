import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './sidenav.service';

import { Image } from './image';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sideNavSubscription: Subscription;
  image: Image;

  constructor(private sidenavService: SidenavService) {
    this.sideNavSubscription = sidenavService.open$.subscribe(image => {
      if (image) {
        this.image = image;
        this.sidenav.open();
      }
    });
  }

  close() {
    this.sidenav.close();
  }

  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe();
  }




}
