import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfessorGuard implements CanActivate {
constructor(private router: Router) {

}

  canActivate() {

    if (localStorage.getItem('userType') === 'professor') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
