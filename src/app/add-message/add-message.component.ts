import { Component, OnDestroy } from '@angular/core';
import { MatSidenav, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { SidenavService } from '../sidenav.service';
import { Image, Message } from '../image';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnDestroy {
  message = '';
  image;
  sidenavSubscription: Subscription;
  addMessage() {
    if (!this.message) {
      return;
    }
    const newMessage: Message = { what: 'hi', content: this.message };
    const selectedImage: Image = (<any>this.matDialogRef.componentInstance).image;
     selectedImage.messages.push(newMessage);
    this.matDialogRef.close();
  }

  constructor(private matDialogRef: MatDialogRef<AddMessageComponent>,
              private sidenavService: SidenavService) {
                this.sidenavSubscription = sidenavService.open$.subscribe(image => {
                  if (image) {
                    this.image = image;
                  }
                });
              }

  ngOnDestroy() {
    this.sidenavSubscription.unsubscribe();
  }

}
