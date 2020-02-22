import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdateProfileService } from '../service/update-profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  profId: string;
  professor: any;
  detailForm: FormGroup;
  constructor(
    private active: ActivatedRoute,
    private updateService: UpdateProfileService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.active.params.subscribe(params => {
      this.profId = params.id;
      this.getProfessorById(this.profId);
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

  getProfessorById(profId) {
    this.updateService.getProfessorById(profId).subscribe((res: any) => {
      console.log("res", res.result[0]);
      this.professor = res.result[0];
      this.detailForm.get("firstName").setValue(this.professor.firstName);
    });
  }

  updateProf(updateType) {
    this.updateService.updateProfByField( this.profId, updateType, this.detailForm.get(updateType).value )
      .subscribe((res: any) => {
        this.getProfessorById(this.profId);
      });
  }
}
