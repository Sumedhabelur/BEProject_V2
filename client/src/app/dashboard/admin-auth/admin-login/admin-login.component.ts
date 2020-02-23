import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminAuthService } from '../adminAuthService/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminForm: FormGroup;
  isLoginFailed = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.adminForm = this.fb.group({
      userName: ['kseadmin', Validators.required],
      pass: ['keystone', Validators.required]
    });
  }

  onSubmitClick() {
    this.loginAdmin();
  }

  loginAdmin() {
    const data = {
      userName: this.adminForm.get('userName').value,
      pass: this.adminForm.get('pass').value
    };

    this.adminService.loginAdmin(data).subscribe((response: any) => {
      if (response) {
       this.router.navigate(['/admin']);
      } else {
        this.isLoginFailed = true;
      }
    });
  }
}
