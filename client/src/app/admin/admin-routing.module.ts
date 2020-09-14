import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin-guard/admin.guard';
import { NoticeComponent } from './notice/notice.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AdminGuard] },
  {
    path: 'dashboard', component: AdminComponent, canActivate: [AdminGuard], children: [
      { path: '', redirectTo: 'student', pathMatch: 'full', canActivate: [AdminGuard] },
      { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentDetailModule) },
      { path: 'fee', loadChildren: () => import('./fee/fee.module').then(m => m.FeeModule), canActivate: [AdminGuard] },
      { path: 'professor', loadChildren: () => import('./professor/professor.module').then(m => m.ProfessorDetailModule), canActivate: [AdminGuard] },
      { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule), canActivate: [AdminGuard] },
      { path: 'notes', component: NoticeComponent, canActivate: [AdminGuard] },
      { path: 'attendance', component: AttendanceComponent, canActivate: [AdminGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
