import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedType = 'Student';

  constructor() { }

  ngOnInit() {
  }

  selectAuthType(type: any) {
    this.selectedType = type;
  }

}
