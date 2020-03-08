import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedType = 'Student';

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  selectAuthType(type: any) {
    this.selectedType = type;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);

  }
}
