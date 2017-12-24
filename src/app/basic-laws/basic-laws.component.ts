import { BasicLawService } from './../basic-law.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-basic-laws',
  templateUrl: './basic-laws.component.html',
  styleUrls: ['./basic-laws.component.css']
})
export class BasicLawsComponent implements OnInit {
  title = 'In Honor for the German People; Our Basic Law.';
  basicLaws: Observable<any[]>;

  constructor(private basicLawService: BasicLawService) { }

  ngOnInit() {
    this.getAllApps();
  }

  getAllApps() {
    this.basicLaws = this.basicLawService.getAllBasicLaws();
  }

}
