import { MessageService } from './../message.service';
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, transition, style, animate, stagger, query, useAnimation } from '@angular/animations';
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../app.route-animations';
import { MatSnackBar } from '@angular/material';

import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ])
  ]
})
export class TechnologyDetailComponent implements OnInit {
  @Input() technology: Technology;
  @HostBinding('@pageAnimations')
  public animationPage = true;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private technologyService: TechnologyService,
              private messageService: MessageService,
              private snackBar: MatSnackBar) { }

  getTechnology(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.technologyService.getTechnology(id)
                          .subscribe(technology => {
                            this.technology = technology;
                            if (!this.technology.url) {
                              this.technology.url = 'https://homepages.thm.de/~dilg93/java/background.jpg';
                            }
                            this.openSnackBar(`fetched technology w/ id=${id}`);
                          });
  }

  save(): void {
    this.technologyService.updateTechonology(this.technology)
                          .subscribe(() => {
                            this.goBack();
                            this.openSnackBar(`updated technology id=${this.technology.id}`);
                          });
  }

  openSnackBar(message: string) {
    this.snackBar.open(`TechnologyService: ${message}`, 'Messages', {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.getTechnology();
  }

  goBack(): void {
    this.location.back();
  }

}
