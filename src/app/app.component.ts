import { Component, ViewChild, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav, MatDialog, MatDialogConfig } from '@angular/material';

import { AddMessageComponent } from './add-message/add-message.component';

import { SidenavService } from './sidenav.service';
import { ImageService } from './image.service';

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

  constructor(private sidenavService: SidenavService,
              private imageService: ImageService,
              private viewContainerRef: ViewContainerRef,
              private matDialog: MatDialog) {
    this.sideNavSubscription = sidenavService.open$.subscribe(image => {
      if (image) {
        this.image = image;
        this.sidenav.open();
      }
    });
  }

  addMessage() {
    // console.log('addMessage clicked');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef = this.viewContainerRef;
    const dialog = this.matDialog.open(AddMessageComponent, dialogConfig);
    (<any>dialog.componentInstance).image = this.image;
  }

  close() {
    this.sidenav.close();
  }

  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe();
  }




}
