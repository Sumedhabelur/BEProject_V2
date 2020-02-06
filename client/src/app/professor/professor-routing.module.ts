import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';
import { UploadNoticeComponent } from './upload-notice/upload-notice.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: ProfessorComponent, children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      { path: 'notes', component: UploadNotesComponent },
      { path: 'notice', component: UploadNoticeComponent },
      { path: 'updateprofile', component: UpdateProfileComponent },
      { path: 'takeattendance', component: TakeAttendanceComponent },
      { path: 'viewattendance', component: ViewAttendanceComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
