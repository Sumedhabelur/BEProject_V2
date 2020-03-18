import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentAttendanceService } from '../service/student-attendance.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  students = [];
  studentsIds = [];
  subjects = [];

  constructor(
    private fb: FormBuilder,
    private studentAttendanceService: StudentAttendanceService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getSubjects();
  }

  buildForm() {
    this.attendanceForm = this.fb.group({
      class: ['SE', Validators.required],
      subject: [undefined, Validators.required]
    });
  }

  onClassSelect() {
    const className = this.attendanceForm.get('class').value;
    this.getStudentByClass(className);
  }
  getSubjects() {
    this.studentAttendanceService.getAllSubjects().subscribe((res: any) => {
      this.subjects = res.result;
    });
  }
  onSubjectSelect() {
    const subjectName = this.attendanceForm.get('subject').value;
  }
  getStudentByClass(data) {
    this.studentAttendanceService.getStudentByClass(data).subscribe((response: any) => {
      this.students = response.result;
    });
  }

  markAttendance(student) {
    if (this.studentsIds.includes(student._id)) {
      _.remove(this.studentsIds, (curStudentId) => {
        return curStudentId === student._id;
      });
    } else {
      this.studentsIds.push(student._id);
    }
  }
}
