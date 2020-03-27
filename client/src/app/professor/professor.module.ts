import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessorComponent } from './professor.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';
import { UploadNoticeComponent } from './upload-notice/upload-notice.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { NotesListComponent } from './notes-list/notes-list.component';


@NgModule({
  declarations: [
    ProfessorComponent,
    UploadNotesComponent,
    UploadNoticeComponent,
    UpdateProfileComponent,
    TakeAttendanceComponent,
    ViewAttendanceComponent,
    NotesListComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfessorModule { }
