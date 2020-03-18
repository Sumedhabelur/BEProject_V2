import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../service/professor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-notes',
  templateUrl: './upload-notes.component.html',
  styleUrls: ['./upload-notes.component.css']
})
export class UploadNotesComponent implements OnInit {

  uploadForm: FormGroup;
  file;
  subjects = [];
  notes = [];

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService  ) { }

  ngOnInit() {
    this.buildForm();
    this.getSubjects();
  }

  buildForm() {
    this.uploadForm = this.fb.group({
      title: ['Topic Name', Validators.required],
      class: ['None', Validators.required],
      subject: [undefined, Validators.required]
    });
  }

  onClassSelect() {
    const className = this.uploadForm.get('class').value;
  }

  getSubjects(){
    this.professorService.getAllSubjects().subscribe((res: any) => {
      this.subjects = res.result;
    });
  }

  onSubjectSelect() {
    const subjectName = this.uploadForm.get('subject').value;
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
