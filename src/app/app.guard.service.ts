import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate {
  auth = false;
  user = {
    name: 'zakuan',
    roles: 'USER'
  }
  constructor(
    private allowedRoles: string[],
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
      const isExist = this.allowedRoles.includes(this.user.roles)  
    if (!isExist) {
      this.router.navigate(['/']);
    }
    
    return true;
  }
}
