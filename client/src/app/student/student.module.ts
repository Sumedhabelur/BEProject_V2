import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { NoticeComponent } from './notice/notice.component';
import { NotesComponent } from './notes/notes.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentEditComponent,
    NoticeComponent,
    NotesComponent,
    FeeDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
