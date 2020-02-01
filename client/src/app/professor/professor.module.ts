import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessorComponent } from './professor.component';


@NgModule({
  declarations: [
    ProfessorComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfessorModule { }
