import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../service/professor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-notice',
  templateUrl: './upload-notice.component.html',
  styleUrls: ['./upload-notice.component.css']
})
export class UploadNoticeComponent implements OnInit {

  noticeForm: FormGroup;
  file;
  notice = [];
  formData = new FormData();

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getNotice();
  }

  buildForm() {
    this.noticeForm = this.fb.group({
      noticeTitle: ['', Validators.required],
      class: ['All', Validators.required],
      notice: [undefined, Validators.required]
    });
  }

  onClassSelect() {
    const className = this.noticeForm.get('class').value;
  }

  onfileUpload(event) {
    this.file = event.target.files[0];
  }

  uploadNotice() {
    const formData = new FormData();
    if (this.file && this.file.name) {
      formData.append('file', this.file, this.file.name);
    }
    formData.append('noticeTitle', this.noticeForm.get('noticeTitle').value);
    formData.append('notice', this.noticeForm.get('notice').value);
    formData.append('class', this.noticeForm.get('class').value);

    this.professorService.uploadNotice(formData).subscribe((response) => {
      Swal.fire('Successfully Uploaded :)');
      this.getNotice();
    });
  }

  getNotice() {
    this.professorService.getNotice().subscribe((res: any) => {
      this.notice = res.result;
    });
  }



}
