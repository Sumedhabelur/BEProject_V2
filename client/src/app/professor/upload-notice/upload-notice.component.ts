import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../service/professor.service';

@Component({
  selector: 'app-upload-notice',
  templateUrl: './upload-notice.component.html',
  styleUrls: ['./upload-notice.component.css']
})
export class UploadNoticeComponent implements OnInit {

  file;
  notice = [];

  constructor(
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.getNotice();
  }

  onfileUpload(event) {
    this.file = event.target.files[0];

    const formData = new FormData();
    formData.append('notice', this.file, this.file.name);

    this.professorService.uploadNotice(formData).subscribe((response) => {
      this.getNotice();
    });

  }

  getNotice() {
    this.professorService.getNotice().subscribe((res: any) => {
      this.notice = res.result;
    });
  }



}
