import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { StudentAuthModule } from './student-auth/student-auth.module';
import { ProfessorAuthModule } from './professor-auth/professor-auth.module';
import { HomeModule } from './home/home.module';
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
    StudentAuthModule,
    ProfessorAuthModule,
    HomeModule
  ]
})
export class DashboardModule { }
