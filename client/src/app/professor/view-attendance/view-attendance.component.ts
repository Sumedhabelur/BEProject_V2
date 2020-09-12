import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentAttendanceService } from '../service/student-attendance.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {

  viewAttendanceForm: FormGroup;
  lectures = [];
  isView = false;
  // isClose = false;

  constructor(
    private fb: FormBuilder,
    private studentAttendanceService: StudentAttendanceService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.onClassSelect();
  }

  buildForm() {
    this.viewAttendanceForm = this.fb.group({
      class: ['SE', Validators.required]
    });
  }

  onClassSelect() {
    const className = this.viewAttendanceForm.get('class').value;
    this.getLectureByClass(className);
  }

  getLectureByClass(data) {
    this.studentAttendanceService.getLectureByClass(data).subscribe((response: any) => {
      console.log('response', response)
      this.lectures = response.result;
    });
  }

  toggleStudentView() {
    this.isView = !this.isView;
  }

  // closeStudent() {
  //   this.isClose = true;
  // }
}
