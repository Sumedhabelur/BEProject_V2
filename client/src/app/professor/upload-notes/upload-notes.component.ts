import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../service/professor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-notes',
  templateUrl: './upload-notes.component.html',
  styleUrls: ['./upload-notes.component.css']
})
export class UploadNotesComponent implements OnInit {

  noteForm: FormGroup;
  file;
  subjects = [];
  notes = [];
  formData = new FormData();

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService) { }

  ngOnInit() {
    this.buildForm();
    this.getSubjects();
    // this.getNotes();
  }

  buildForm() {
    this.noteForm = this.fb.group({
      noteTitle: ['Topic Name', Validators.required],
      class: ['None', Validators.required],
      subject: [undefined, Validators.required]
    });
  }

  onClassSelect() {
    const className = this.noteForm.get('class').value;
  }

  getSubjects() {
    this.professorService.getAllSubjects().subscribe((res: any) => {
      this.subjects = res.result;
      // console.log(this.subjects[0]._id);
    });
  }

  onSubjectSelect() {
    const subjectName = this.noteForm.get('subject').value;
    // console.log("subjectName:",subjectName);
  }

  onfileUpload(event) {
    this.file = event.target.files[0];
  }

  getNotes() {
    this.professorService.getNotes().subscribe((res: any) => {
      this.notes = res.result;
      // console.log(this.notes.subject);
    });
  }

  uploadNote() {
    this.getNoteData();
    this.professorService.uploadNote(this.formData).subscribe((response) => {
      // this.getNotes();
    });
  }

  getNoteData() {
    this.formData.append('note', this.file, this.file.name);
    this.formData.append('noteTitle', this.noteForm.get('noteTitle').value);
    this.formData.append('class', this.noteForm.get('class').value);
    this.formData.append('subject', this.noteForm.get('subject').value);
    this.formData.append('professor', this.professorService.professorId);
  }
}
