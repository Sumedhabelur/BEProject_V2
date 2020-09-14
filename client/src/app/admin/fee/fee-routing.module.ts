import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeComponent } from './fee.component';
import { GetFeesComponent } from './get-fees/get-fees.component';
import { RegisterFeeComponent } from './register-fee/register-fee.component';
import { UpdateFeeComponent } from './update-fee/update-fee.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: FeeComponent, children: [
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      { path: 'add', component: RegisterFeeComponent },
      { path: 'update', component: UpdateFeeComponent },
      { path: 'view', component: GetFeesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeRoutingModule { }
