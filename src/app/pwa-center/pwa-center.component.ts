
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { PwaService } from './pwa.service';

@Component({
  selector: 'app-pwa-center',
  templateUrl: './pwa-center.component.html',
  styleUrls: ['./pwa-center.component.css']
})
export class PwaCenterComponent implements OnInit {

  apps: Observable<any[]>;

  constructor(private pwaService: PwaService) { }

  ngOnInit() {
    this.getAllApps();
  }

  getAllApps() {
    this.apps = this.pwaService.getAllApps();
  }

}
