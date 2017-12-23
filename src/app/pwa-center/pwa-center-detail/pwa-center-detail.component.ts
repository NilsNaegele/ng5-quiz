import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PwaService } from '../pwa.service';

@Component({
  selector: 'app-pwa-center-detail',
  templateUrl: './pwa-center-detail.component.html',
  styleUrls: ['./pwa-center-detail.component.css']
})
export class PwaCenterDetailComponent implements OnInit {
  app;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private pwaService: PwaService) {
                this.activatedRoute.params.subscribe((params: any) => {
                  if (params['id']) {
                    this.pwaService.getAppById(params['id'])
                                      .subscribe((app: any) => {
                              if (Object.keys(app).length === 0) {
                                  this.navigatePwasList();
                              }
                              this.app = app;
                    });
                  }
            });
               }

  navigatePwasList() {
    this.router.navigate(['/pwa-center']);
  }

  ngOnInit() { }

}
