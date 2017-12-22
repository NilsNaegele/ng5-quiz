import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PwaService } from '../pwa.service';

@Component({
  selector: 'app-pwa-center-detail',
  templateUrl: './pwa-center-detail.component.html',
  styleUrls: ['./pwa-center-detail.component.css']
})
export class PwaCenterDetailComponent implements OnInit {
  app$: Observable<any>;

  constructor(private activedRoute: ActivatedRoute,
              private pwaService: PwaService) {

               }

  ngOnInit() {
    this.app$ = this.activedRoute.paramMap.switchMap((params: any) =>
      this.pwaService.getAppById(params.get('id'))
    );
  }

}
