import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, animate, stagger, query, useAnimation } from '@angular/animations';
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../app.route-animations';

import { TechnologyService } from './../technology.service';
import { MessageService } from './../message.service';
import { Technology } from '../technology';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ])
  ]
})
export class TechnologiesComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animationPage = true;
  title = 'Tour of Technologies';

  technologies: Technology[] = [];
  selectedTechnology: Technology;

  getTechnologies(): void {
    this.technologyService.getTechnologies()
                          .subscribe(technologies => this.technologies = technologies);
  }

  onSelect(technology: Technology): void {
    this.selectedTechnology = technology;
  }

  constructor(private technologyService: TechnologyService,
              private MessageService: MessageService,
              private snackBar: MatSnackBar) {
                this.openSnackBar();
               }

  openSnackBar() {
    const messages = this.MessageService.messages;
    this.snackBar.open(messages[0], 'Messages', {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.getTechnologies();

  }

}
