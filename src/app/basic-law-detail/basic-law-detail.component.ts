import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BasicLawService } from './../basic-law.service';

@Component({
  selector: 'app-basic-law-detail',
  templateUrl: './basic-law-detail.component.html',
  styleUrls: ['./basic-law-detail.component.css']
})
export class BasicLawDetailComponent implements OnInit {
  basicLaw;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private pwaService: BasicLawService) {
                this.activatedRoute.params.subscribe((params: any) => {
                  if (params['id']) {
                    this.pwaService.getBasicLawById(params['id'])
                                      .subscribe((basicLaw: any) => {
                              if (Object.keys(basicLaw).length === 0) {
                                  this.navigateBasicLawsHome();
                              }
                              this.basicLaw = basicLaw;
                    });
                  }
            });
               }

  navigateBasicLawsHome() {
    this.router.navigate(['/basic-laws']);
  }

  ngOnInit() { }

}

