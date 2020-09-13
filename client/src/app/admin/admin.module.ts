import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { StudentRegistrationFormComponent } from './student-registration-form/student-registration-form.component';
import { ProfessorRegistrationFormComponent } from './professor-registration-form/professor-registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { NoticeComponent } from './notice/notice.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { RegisterFeeComponent } from './register-fee/register-fee.component';
import { UpdateFeeComponent } from './update-fee/update-fee.component';
import { GetFeesComponent } from './get-fees/get-fees.component';


@NgModule({
  declarations: [
    AdminComponent,
    StudentRegistrationFormComponent,
    ProfessorRegistrationFormComponent,
    StudentListComponent,
    StudentComponent,
    ProfessorComponent,
    ProfessorListComponent,
    SubjectComponent,
    SubjectListComponent,
    SubjectAddComponent,
    NoticeComponent,
    AttendanceComponent,
    FeeDetailsComponent,
    RegisterFeeComponent,
    UpdateFeeComponent,
    GetFeesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
