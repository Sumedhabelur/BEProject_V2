import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticeComponent } from './notice/notice.component';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [
    AdminComponent,
    NoticeComponent,
    AttendanceComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
