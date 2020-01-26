import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AdminLoginComponent]
})
export class AdminAuthModule { }
