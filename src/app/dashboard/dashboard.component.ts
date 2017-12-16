import { Component, OnInit } from '@angular/core';
import { TechnologyService } from './../technology.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  technologies;
  constructor(private technologyService: TechnologyService) { }

  getTechnologies(): void {
    this.technologyService.getTechnologies()
    .subscribe(technologies => this.technologies = technologies.slice(0, 4));
  }


  ngOnInit() {
    this.getTechnologies();
  }

}
