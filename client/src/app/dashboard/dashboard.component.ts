import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedType = 'Student';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
   this.checkWhoIsLogin();
  }

  checkWhoIsLogin() {
    const userType = localStorage.getItem('userType');
    if (userType === 'admin') {
      this.router.navigate(['admin/dashboard']);
    }
    if (userType === 'student') {
      this.router.navigate(['student/dashboard']);
     }
  }

  selectAuthType(type) {
    this.selectedType = type;
  }
}
