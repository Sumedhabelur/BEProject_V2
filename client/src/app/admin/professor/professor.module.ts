import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorComponent } from './professor.component';
import { ProfessorRegistrationFormComponent } from './professor-registration-form/professor-registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfessorRegistrationFormComponent,
    ProfessorComponent,
    ProfessorListComponent,
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfessorDetailModule { }
