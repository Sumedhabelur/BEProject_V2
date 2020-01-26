import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorAuthRoutingModule } from './professor-auth-routing.module';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';


@NgModule({
  declarations: [ProfessorLoginComponent],
  imports: [
    CommonModule,
    ProfessorAuthRoutingModule
  ]
})
export class ProfessorAuthModule { }
