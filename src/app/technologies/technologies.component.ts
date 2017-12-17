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

  getTechnologies(): void {
    this.technologyService.getTechnologies()
                          .subscribe(technologies => this.technologies = technologies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.technologyService.addTechnology({ name } as Technology)
                          .subscribe(technology => {
                            this.technologies.push(technology);
                            this.openSnackBar(`added technology w/ id=${technology.id}`);
                            });
  }

  delete(technology: Technology): void {
    this.technologies = this.technologies.filter(t => t !== technology);
    this.technologyService.deleteTechnology(technology).subscribe(() => {
      this.openSnackBar(`deleted technology w/ id=${technology.id}`);
    });
  }

  constructor(private technologyService: TechnologyService,
              private messageService: MessageService,
              private snackBar: MatSnackBar) {
                this.openSnackBar('fetched technologies');
               }

  openSnackBar(message: string) {
    this.snackBar.open(`TechnologyService: ${message}`, 'Messages', {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.getTechnologies();

  }

}
