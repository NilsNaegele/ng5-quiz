import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,
         Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.userService.isAuthenticated;
  }

}
