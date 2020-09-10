import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  noticeForm: FormGroup;
  file;
  notice = [];
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.noticeForm = this.fb.group({
      class: ['All', Validators.required]
    });
  }

  onClassSelect() {
    const className = this.noticeForm.get('class').value;
    this.getNoticeByClass(className);
  }

  getNoticeByClass(data) {
    this.adminService.getNoticeByClass(data).subscribe((res: any) => {
      this.notice = res.result;
    });
  }
}
