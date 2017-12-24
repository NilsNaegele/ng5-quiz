import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../social/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() sidenav;

  currentUser = '';

  constructor(private userService: UserService, private router: Router) { }

  signOut() {
    this.userService.logout();
    this.currentUser = null;
    this.router.navigateByUrl('/social');
  }

  ngOnInit() {
    this.userService.currentUser
                               .subscribe((userData) => {
                                 if (userData !== null && !this.isEmpty(userData)) {
                                this.currentUser = userData.email.replace(/@.*$/, '');
                                 }
                               });
  }

  private isEmpty(obj): boolean {
    return Object.keys(obj).length === 0;
  }

}
