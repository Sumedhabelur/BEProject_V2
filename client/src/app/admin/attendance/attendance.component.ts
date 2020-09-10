import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attendanceForm: FormGroup;
  lectures = [];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.attendanceForm = this.fb.group({
      class: ['SE', Validators.required]
    });
  }

  onClassSelect() {
    const className = this.attendanceForm.get('class').value;
    this.getLectureByClass(className);
  }

  getLectureByClass(data) {
    this.adminService.getLectureByClass(data).subscribe((response: any) => {
      this.lectures = response.result;
    });
  }
}
