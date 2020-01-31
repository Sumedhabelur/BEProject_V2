import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { StudentRegistrationFormComponent } from './student-registration-form/student-registration-form.component';
import { ProfessorRegistrationFormComponent } from './professor-registration-form/professor-registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    StudentRegistrationFormComponent,
    ProfessorRegistrationFormComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
