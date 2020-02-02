import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {

  subjectForm: FormGroup;
  professors = ['test', 'test']

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {

    this.subjectForm = this.fb.group({
      subjectName: ['', Validators.required],
      professor: ['', Validators.required]
    });

  }

}
