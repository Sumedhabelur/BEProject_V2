import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {

    if (localStorage.getItem('userType') === 'student') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
