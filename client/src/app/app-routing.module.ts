import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'student/:id', loadChildren: './student/student.module#StudentModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'professor/:id', loadChildren: './professor/professor.module#ProfessorModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
