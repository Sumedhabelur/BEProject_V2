import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfessorService } from '../service/professor.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  professorId: string;
  professor: any;
  detailForm: FormGroup;
  constructor(
    private active: ActivatedRoute,
    private professorService: ProfessorService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.active.params.subscribe(params => {
      this.professorId = params.id;
      this.getProfessorById(this.professorId);
    });
    this.buildForm();
  }

  buildForm() {
    this.detailForm = this.fb.group({
      email: [""],
      pass: [""],
      firstName: [""],
      lastName: [""],
      joiningDate: [""],
      dob: [""],
      userName: [""]
    });
  }

  getProfessorById(professorId) {
    this.professorService.getProfessorById(professorId).subscribe((res: any) => {
      console.log("res", res.result[0]);
      this.professor = res.result[0];
      this.detailForm.get('firstName').setValue(this.professor.firstName);
      this.detailForm.get('lastName').setValue(this.professor.lastName);
      this.detailForm.get('email').setValue(this.professor.email);
      this.detailForm.get('joiningDate').setValue(this.professor.joiningDate);
      this.detailForm.get('dob').setValue(this.professor.dob);
      this.detailForm.get('userName').setValue(this.professor.userName);
    });
  }

  updateProf(updateType) {
    this.professorService.updateProfByField( this.professorId, updateType, this.detailForm.get(updateType).value )
      .subscribe((res: any) => {
        this.getProfessorById(this.professorId);
      });
  }
}
