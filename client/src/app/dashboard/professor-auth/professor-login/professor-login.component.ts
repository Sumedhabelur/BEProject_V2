import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProfessorAuthService } from '../professor-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-login',
  templateUrl: './professor-login.component.html',
  styleUrls: ['./professor-login.component.css']
})
export class ProfessorLoginComponent implements OnInit {

  isLoginFailed = false;
  professorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.professorForm = this.fb.group({
      userName: ['P19C1', Validators.required],
      pass: ['Random', Validators.required]
    });
  }

  onSubmitClick() {
    this.loginProfessor();
  }

  loginProfessor() {
    const data = {
      userName: this.professorForm.get('userName').value,
      pass: this.professorForm.get('pass').value
    };


    this.professorService.loginProfessor(data).subscribe((response: any) => {
      if (response.result.length > 0) {
        localStorage.setItem('userType', 'professor');
        localStorage.setItem('token', 'token');
        localStorage.setItem('professorId', response.result[0]._id);
        this.router.navigate([`/professor/${response.result[0]._id}`]);
      } else {
        this.isLoginFailed = true;
      }

    });
   }

}
