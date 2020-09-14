import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-update-fee',
  templateUrl: './update-fee.component.html',
  styleUrls: ['./update-fee.component.css']
})
export class UpdateFeeComponent implements OnInit {

  feeForm: FormGroup;
  fees = [];
  addFeeForm: FormGroup;
  isUpdateFailed = false;
  isViewForm = false;
  feeId;

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
      totalFee: ['70000', Validators.required],
      balanceFee: ['', Validators.required],
    });
  }

  onClassSelect() {
    const className = this.feeForm.get('class').value;
    this.getFeesByClass(className);
  }

  getFeesByClass(data) {
    this.adminService.getFeesByClass(data).subscribe((response: any) => {
      this.fees = response.result;
    });
    console.log(this.fees);
  }

  editStudentFee(fee) {
    this.feeId = fee._id;
    this.isViewForm = true;
    this.addFeeForm.get('userName').setValue(fee.studentId.userName);
    this.addFeeForm.get('payment1').setValue(fee.payment1);
    this.addFeeForm.get('date1').setValue(new Date(fee.date1).toDateString());
    this.addFeeForm.get('payment2').setValue(fee.payment2);
    this.addFeeForm.get('date2').setValue(new Date(fee.date2).toDateString());
  }

  getBalanceFee(){
    console.log(this.feeId.balanceFee);
    this.addFeeForm.get('balanceFee').setValue(this.feeId.balanceFee);
  }

  updateFee(updateType) {
      this.adminService.updateFee(this.feeId, updateType, this.addFeeForm.get(updateType).value )
        .subscribe((res: any) => {
          console.log('Success!');
        });
    }
}
