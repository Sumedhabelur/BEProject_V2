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
  isViewForm = false;

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

    this.addFeeForm = this.fb.group({
      userName: ['', Validators.required],
      sem1: ['', Validators.required],
      date1: ['', Validators.required],
      sem2: ['', Validators.required],
      date2: ['', Validators.required],
      totalfees: ['', Validators.required],
      balancefees: ['', Validators.required]
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

  addStudentFee(student) {
    console.log(student._id);
    this.isViewForm = true;
    this.addFeeForm.get('userName').setValue(student.userName);
  }

  onRegisterClick(){
    console.log("In register Fee !!");

  }

}
