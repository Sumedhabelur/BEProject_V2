import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentGuard } from './studentGuard/student.guard';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { NotesComponent } from './notes/notes.component';
import { NoticeComponent } from './notice/notice.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [StudentGuard] },
  {
    path: 'dashboard', component: StudentComponent, canActivate: [StudentGuard],
    children: [
      { path: '', redirectTo: 'updateprofile', pathMatch: 'full' },
      { path: 'updateprofile', component: StudentEditComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'notice', component: NoticeComponent },
      { path: 'feeDetails', component: FeeDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
