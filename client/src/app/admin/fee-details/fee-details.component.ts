import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.css']
})
export class FeeDetailsComponent implements OnInit {

  feeForm: FormGroup;
  students = [];
  addFeeForm: FormGroup;
  isRegisterFailed = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.feeForm = this.fb.group({
      class: ['SE', Validators.required],
    });
  }

  onClassSelect() {
    const className = this.feeForm.get('class').value;
    this.getStudentByClass(className);
  }

  getStudentByClass(data) {
    this.adminService.getStudentByClass(data).subscribe((response: any) => {
      this.students = response.result;
    });
    console.log(this.students);
  }

  onRegisterClick(){

  }

}
