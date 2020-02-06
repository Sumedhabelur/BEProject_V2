import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../service/professor.service';

@Component({
  selector: 'app-upload-notes',
  templateUrl: './upload-notes.component.html',
  styleUrls: ['./upload-notes.component.css']
})
export class UploadNotesComponent implements OnInit {

  file;
  notes = [];

  constructor(
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.getNotes();
  }

  onfileUpload(event) {
    this.file = event.target.files[0];

    const formData = new FormData();
    formData.append('note', this.file, this.file.name);

    this.professorService.uploadFile(formData).subscribe((response) => {
      this.getNotes();
    });

  }

  getNotes() {
    this.professorService.getNotes().subscribe((res: any) => {
      this.notes = res.result;
    });
  }



}
