import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../service/student.service';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: any;
  detailForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getStudentById(this.studentService.studentId);
    this.buildForm();
  }

  buildForm() {
    this.detailForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      dob: [''],
    });
  }

  getStudentById(studentId: string) {
    this.studentService.getStudentById(studentId).subscribe((res: any) => {
      this.student = res.result;
      this.detailForm.get('firstName').setValue(this.student.firstName);
      this.detailForm.get('lastName').setValue(this.student.lastName);
      this.detailForm.get('email').setValue(this.student.email);
      this.detailForm.get('dob').setValue(this.student.dob);
      this.detailForm.get('password').setValue(this.student.pass);
    });
  }

  updateStud(updateType) {
    this.studentService.updateStudByField(this.studentService.studentId, updateType, this.detailForm.get(updateType).value )
      .subscribe((res: any) => {
        this.getStudentById(this.studentService.studentId);
      });
  }

}
