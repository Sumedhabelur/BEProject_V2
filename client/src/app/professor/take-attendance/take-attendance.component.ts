import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StudentAttendanceService } from '../service/student-attendance.service';

@Component({
  selector: "app-take-attendance",
  templateUrl: "./take-attendance.component.html",
  styleUrls: ["./take-attendance.component.css"]
})
export class TakeAttendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  students = [];

  constructor(
    private fb: FormBuilder,
    private studentAttendanceService: StudentAttendanceService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.attendanceForm = this.fb.group({
      class: ['SE', Validators.required]
    });
  }

  onClassSelect() {
    const data = this.attendanceForm.get('class').value;
    // this.getStudentByClass(this.attendanceForm.value.class);
    this.getStudentByClass(data);

    console.log(data);
  }

  // getStudentByClass(className) {
  //    this.studentAttendanceService.getStudentByClass(className).subscribe((res: any) => {
  //     this.students = response.result;
  //    });
  // }
  getStudentByClass(data) {
    this.studentAttendanceService.getStudentByClass(data).subscribe((response: any) => {
      this.students = response.result;
      console.log('response', response);
    });
  }
}
