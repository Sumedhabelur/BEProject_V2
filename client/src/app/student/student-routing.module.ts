import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentGuard } from './studentGuard/student.guard';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate:[StudentGuard] },
  { path: 'dashboard', component: StudentComponent , canActivate:[StudentGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
