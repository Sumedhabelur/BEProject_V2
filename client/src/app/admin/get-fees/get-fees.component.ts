import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  }

  buildForm() {
    this.listForm = this.fb.group({
      class: ['None', Validators.required]
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
