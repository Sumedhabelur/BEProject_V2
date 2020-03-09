import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  selectedType = 'Student-Edit';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  selectAuthType(type: any) {
    this.selectedType = type;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
