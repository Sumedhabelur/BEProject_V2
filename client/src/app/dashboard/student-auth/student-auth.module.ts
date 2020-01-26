import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAuthRoutingModule } from './student-auth-routing.module';
import { StudentLoginComponent } from './student-login/student-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentLoginComponent],
  imports: [
    CommonModule,
    StudentAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [StudentLoginComponent]
})
export class StudentAuthModule { }
