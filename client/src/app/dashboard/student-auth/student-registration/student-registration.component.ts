import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentAuthService } from '../studentAuthService/student-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  isRegisterFailed = false;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentAuthService,
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
    console.log('response', response);
    if (response.length > 0) {
      this.router.navigate(['/admin']);
    } else {
      console.log('Registeration Failed');
      this.isRegisterFailed = true;
    }

  });
}

}
