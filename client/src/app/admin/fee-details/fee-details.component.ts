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
  studentId;

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
      payment1: ['', Validators.required],
      date1: ['', Validators.required],
      payment2: ['', Validators.required],
      date2: ['', Validators.required],
      totalFee: ['', Validators.required],
      balanceFee: ['', Validators.required]
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
    this.studentId = student._id;
    this.isViewForm = true;
    this.addFeeForm.get('userName').setValue(student.userName);
  }

  onRegisterClick() {
    console.log('In register Fee !!');
    const data = {
      studentId: this.studentId,
      class: this.feeForm.get('class').value,
      payment1: this.addFeeForm.get('payment1').value,
      date1: this.addFeeForm.get('date1').value,
      payment2: this.addFeeForm.get('payment2').value,
      date2: this.addFeeForm.get('date2').value,
      totalFee: this.addFeeForm.get('totalFee').value,
      balanceFee: this.addFeeForm.get('balanceFee').value,
    };
    this.adminService.registerFees(data).subscribe((response: any) => {
      console.log(response);
      if (response) {
        console.log('Successful');
      } else {
        this.isRegisterFailed = true;
      }

    });
  }

}
