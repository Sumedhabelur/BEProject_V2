import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-get-fees',
  templateUrl: './get-fees.component.html',
  styleUrls: ['./get-fees.component.css']
})
export class GetFeesComponent implements OnInit {

  listForm: FormGroup;
  fees = [];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.onClassSelect();
  }

  buildForm() {
    this.listForm = this.fb.group({
      class: ['SE', Validators.required]
    });
  }

  onClassSelect() {
    const data = this.listForm.get('class').value;
    this.getFeesByClass(data);
  }

  getFeesByClass(data) {
    this.adminService.getFeesByClass(data).subscribe((response: any) => {
      this.fees = response.result;
    });
  }

}
