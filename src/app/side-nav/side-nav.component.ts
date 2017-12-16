import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  technologies = [
    { name: 'Angular 5', url: 'https://angular.io/' },
    { name: 'Angular CLI', url: 'https://cli.angular.io/' },
    { name: 'Angular Material', url: 'https://material.angular.io/' },
    { name: 'Firebase', url: 'https://firebase.google.com/' },
    { name: 'Google Cloud Platform', url: 'https://cloud.google.com/' },
    { name: 'Ionic 3', url: 'https://ionicframework.com/' }
  ];

  myTechnologies = [
    { name: 'Angular 4 Love Affair', url: 'https://nilsnaegele.gitbooks.io/angular-4-love-affair/content/cover-page.html' },
    { name: 'Angular 4 Exploration', url: 'https://nilsholger.gitbooks.io/angular-4-exploration/content/coverpage.html' },
    { name: 'Angular 4 Books', url: 'https://ng4-books.firebaseapp.com/' },
    { name: 'Angular 4 Newsmedia', url: 'https://ng4-newsmedia.firebaseapp.com/' },
    { name: 'Angular 4 Hackernews', url: 'https://ng4-hackernews.firebaseapp.com/' },
    { name: 'Personal Website', url: 'http://nilsnaegele.com/' }
  ];
  ngOnInit() {}

}
