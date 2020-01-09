import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate {
  auth = false;

  constructor(
    private allowedRoles: string[],
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
    if (this.auth) {
      this.router.navigate(['/admin']);
    }
    
    return true;
  }
}
