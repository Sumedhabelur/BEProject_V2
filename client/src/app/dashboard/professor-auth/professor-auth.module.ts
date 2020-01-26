import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorAuthRoutingModule } from './professor-auth-routing.module';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfessorLoginComponent],
  imports: [
    CommonModule,
    ProfessorAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProfessorLoginComponent]

})
export class ProfessorAuthModule { }
