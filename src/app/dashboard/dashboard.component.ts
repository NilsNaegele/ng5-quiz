import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, animate, stagger, query, useAnimation } from '@angular/animations';
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../app.route-animations';

import { Technology } from '../technology';
import { TechnologyService } from './../technology.service';


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
  constructor(private technologyService: TechnologyService) { }

  getTechnologies(): void {
    this.technologyService.getTechnologies()
    .subscribe(technologies => this.technologies = technologies.slice(0, 4));
  }


  ngOnInit() {
    this.getTechnologies();
  }

}
