import { Component, OnInit, Input } from '@angular/core';
import { Technology } from '../technology';

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.css']
})
export class TechnologyDetailComponent implements OnInit {

  @Input() technology: Technology;

  constructor() { }

  ngOnInit() {
  }

}
