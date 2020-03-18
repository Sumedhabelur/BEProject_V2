import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessorService } from '../service/professor.service';

@Component({
  selector: 'app-professor-registration-form',
  templateUrl: './professor-registration-form.component.html',
  styleUrls: ['./professor-registration-form.component.css']
})
export class ProfessorRegistrationFormComponent implements OnInit {

  registerForm: FormGroup;
  isRegisterFailed = false;

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

buildForm() {
  this.registerForm = this.fb.group({
    firstName: ['testxyz', Validators.required],
    lastName: ['test', Validators.required],
    email: ['revati.jagtap1989@gmail.com', Validators.required],
    dob: ['1999-05-25', Validators.required],
    joiningDate: ['2020-01-26', Validators.required],
  });
}

onRegisterClick() {
  this.registerProfessor();
}

registerProfessor() {

  const data = {
    firstName: this.registerForm.get('firstName').value,
    lastName: this.registerForm.get('lastName').value,
    email: this.registerForm.get('email').value,
    dob: this.registerForm.get('dob').value,
    joiningDate: this.registerForm.get('joiningDate').value,

  };
  this.professorService.registerProfessor(data).subscribe((response: any) => {
    if (response.length > 0) {
      this.router.navigate(['/admin']);
    } else {
      this.isRegisterFailed = true;
    }

  });
}


}
