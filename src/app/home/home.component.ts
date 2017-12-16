import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, stagger, query, useAnimation } from '@angular/animations';
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../app.route-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ])
  ]
})
export class HomeComponent {
  @HostBinding('@pageAnimations')
  public animationPage = true;

  constructor(private router: Router) { }


  startQuiz() {
    this.router.navigate(['/quiz']);
  }

}
