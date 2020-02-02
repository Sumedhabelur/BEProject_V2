import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
