import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { StudentAuthModule } from './student-auth/student-auth.module';
@NgModule({
  declarations: [
    DashboardComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminAuthModule,
    StudentAuthModule
  ]
})
export class DashboardModule { }
