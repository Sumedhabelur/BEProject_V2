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
  studentAttendanceService: any;

  constructor(
    private fb: FormBuilder,
    private studentAttendance: StudentAttendanceService
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
    this.getStudentByClass(this.attendanceForm.value.class);
  }

  getStudentByClass(className) {
     this.studentAttendanceService.getStudentByClass(className).subscribe((res: any) => {
     });
  }
}
