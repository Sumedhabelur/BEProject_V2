import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  noteForm: FormGroup;
  notes = [];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.noteForm = this.fb.group({
      class: ['All', Validators.required]
    });
  }

  onClassSelect() {
    const className = this.noteForm.get('class').value;
    this.getNoteByClass(className);
  }

  getNoteByClass(data) {
    this.studentService.getNoteByClass(data).subscribe((res: any) => {
      this.notes = res.result;
    });
  }

}
