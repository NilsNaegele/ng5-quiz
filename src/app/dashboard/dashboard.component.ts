import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, animate, stagger, query, useAnimation } from '@angular/animations';
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../app.route-animations';
import { MatSnackBar } from '@angular/material';
import { Technology } from '../technology';
import { TechnologyService } from './../technology.service';
import { MessageService } from './../message.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ])
  ]
})
export class DashboardComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animationPage = true;
  technologies: Technology[] = [];
  constructor(private snackBar: MatSnackBar, private technologyService: TechnologyService,
              private messageService: MessageService) {
                this.openSnackBar();
              }

  getTechnologies(): void {
    this.technologyService.getTechnologies()
    .subscribe(technologies => this.technologies = technologies.slice(0, 4));
  }

  openSnackBar() {
    const messages = this.messageService.messages;
    this.snackBar.open(messages.slice(-1).pop(), 'Messages', {
      duration: 2000,
    });
  }


  ngOnInit() {
    this.getTechnologies();
  }

}
