import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentAuthService } from '../studentAuthService/student-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginFailed = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentAuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmitClick() {
    this.loginStudent();
  }

  loginStudent() {
    const data = {
      userName: this.loginForm.get('userName').value,
      pass: this.loginForm.get('pass').value
    };

    this.studentService.loginStudent(data).subscribe((response: any) => {
      if (response.length > 0) {
        localStorage.setItem('userType', 'student');
        localStorage.setItem('token', 'token');
        localStorage.setItem('studentId', response[0]._id);
        this.router.navigate(['/student', response[0]._id]);
      } else {
        this.isLoginFailed = true;
      }

    });
  }
}
