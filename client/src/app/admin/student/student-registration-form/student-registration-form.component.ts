import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent implements OnInit {
  registerForm: FormGroup;
  isRegisterFailed = false;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

buildForm() {
  this.registerForm = this.fb.group({
    firstName: ['test', Validators.required],
    lastName: ['test', Validators.required],
    email: ['7276279026.pk@gmail.com', Validators.required],
    class: ['SE', Validators.required],
    dob: ['1997-12-28', Validators.required],
    typeOfAdmission: ['DSE', Validators.required],
    dept: ['COMP', Validators.required]
  });
}

onRegisterClick() {
  this.registerStudent();
}

registerStudent() {

  const data = {
    firstName: this.registerForm.get('firstName').value,
    lastName: this.registerForm.get('lastName').value,
    email: this.registerForm.get('email').value,
    class: this.registerForm.get('class').value,
    dob: this.registerForm.get('dob').value,
    typeOfAdmission: this.registerForm.get('typeOfAdmission').value,
    dept: this.registerForm.get('dept').value
  };
  this.studentService.registerStudent(data).subscribe((response: any) => {
    if (response.length > 0) {
      this.router.navigate(['/admin']);
    } else {
      this.isRegisterFailed = true;
    }

  });
}

}
