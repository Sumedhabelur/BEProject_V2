import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  selectedType = 'Student-Edit';
  constructor() { }

  ngOnInit() {
  }
  selectAuthType(type: any) {
    this.selectedType = type;
  }
}
