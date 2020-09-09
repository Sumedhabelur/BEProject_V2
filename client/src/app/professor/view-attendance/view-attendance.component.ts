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

  constructor(
    private fb: FormBuilder,
    private studentAttendanceService: StudentAttendanceService
  ) { }

  ngOnInit() {
    this.buildForm();
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
      this.lectures = response.result;
    });
  }

}
