import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StudentAttendanceService } from '../service/student-attendance.service';
import * as _ from 'lodash';

@Component({
  selector: "app-take-attendance",
  templateUrl: "./take-attendance.component.html",
  styleUrls: ["./take-attendance.component.css"]
})
export class TakeAttendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  students = [];
  studentsIds = [];
  subjects = [];

  constructor(
    private fb: FormBuilder,
    private studentAttendanceService: StudentAttendanceService
  ) {}

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
    // this.getStudentByClass(this.attendanceForm.value.class);
    this.getStudentByClass(className);

    console.log(className);
  }
  getSubjects(){
    this.studentAttendanceService.getAllSubjects().subscribe((res: any) => {
      this.subjects = res.result;
      console.log(this.subjects);
    });
  }
  onSubjectSelect() {
    const subjectName = this.attendanceForm.get('subject').value;
    console.log('Subject', subjectName);
  }
  getStudentByClass(data) {
    this.studentAttendanceService.getStudentByClass(data).subscribe((response: any) => {
      this.students = response.result;
      console.log('response', response);
    });
  }

  markAttendance(student) {
    console.log('student', student)


    if (this.studentsIds.includes(student._id)) {
      _.remove(this.studentsIds, (curStudentId) => {
        return curStudentId === student._id;
      });
    } else {
      this.studentsIds.push(student._id);
    }

    console.log('this.studentsIds', this.studentsIds)
  }
}
