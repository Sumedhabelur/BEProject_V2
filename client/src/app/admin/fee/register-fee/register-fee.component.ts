import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-fee',
  templateUrl: './register-fee.component.html',
  styleUrls: ['./register-fee.component.css']
})
export class RegisterFeeComponent implements OnInit {

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
      name: ['', Validators.required],
      payment1: ['', Validators.required],
      date1: ['', Validators.required],
      payment2: ['', Validators.required],
      date2: ['', Validators.required],
    });
    this.onClassSelect();
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

  toggleAddStudentFee(student) {
    console.log(student._id);
    this.studentId = student._id;
    this.isViewForm = !this.isViewForm;
    this.addFeeForm.get('userName').setValue(student.userName);
    this.addFeeForm.get('name').setValue(student.firstName + ' ' + student.lastName);
  }

  onRegisterClick() {
    console.log('In register Fee !!');
    const data = {
      studentId: this.studentId,
      class: this.feeForm.get('class').value,
      payment1: this.addFeeForm.get('payment1').value,
      date1: this.addFeeForm.get('date1').value,
      payment2: this.addFeeForm.get('payment2').value,
      date2: this.addFeeForm.get('date2').value
    };
    this.adminService.registerFees(data).subscribe((response: any) => {
      console.log(response);
      if (response) {
        Swal.fire('Successfully Added :)');
      } else {
        this.isRegisterFailed = true;
      }

    });
  }

}
