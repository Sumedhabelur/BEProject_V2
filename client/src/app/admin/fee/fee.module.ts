import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeRoutingModule } from './fee-routing.module';
import { FeeComponent } from './fee.component';
import { GetFeesComponent } from './get-fees/get-fees.component';
import { RegisterFeeComponent } from './register-fee/register-fee.component';
import { UpdateFeeComponent } from './update-fee/update-fee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeeComponent,
    GetFeesComponent,
    RegisterFeeComponent,
    UpdateFeeComponent
  ],
  imports: [
    CommonModule,
    FeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeeModule { }
