import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfessorService } from '../service/professor.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  professor: any;
  detailForm: FormGroup;
  constructor(
    private professorService: ProfessorService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getProfessorById(this.professorService.professorId);
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

  getProfessorById(professorId: string) {
    this.professorService.getProfessorById(professorId).subscribe((res: any) => {
      this.professor = res.result;
      this.detailForm.get('firstName').setValue(this.professor.firstName);
      this.detailForm.get('lastName').setValue(this.professor.lastName);
      this.detailForm.get('email').setValue(this.professor.email);
      this.detailForm.get('dob').setValue(this.professor.dob);
      this.detailForm.get('password').setValue(this.professor.pass);
    });
  }

  updateProf(updateType) {
    this.professorService.updateProfByField(this.professorService.professorId, updateType, this.detailForm.get(updateType).value )
      .subscribe((res: any) => {
        this.getProfessorById(this.professorService.professorId);
      });
  }
}
