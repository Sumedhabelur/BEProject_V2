import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessorService } from '../../service/professor.service';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {

  subjectForm: FormGroup;
  professors = [];

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getProfessors();
  }

  buildForm() {
    this.subjectForm = this.fb.group({
      subjectName: ['', Validators.required],
      professor: [undefined, Validators.required]
    });
  }

  getProfessors() {
    this.professorService.getAllProfessors().subscribe((res: any) => {
      this.professors = res.result;
    });
  }

  addSubject() {
    this.subjectService.addSubject(this.subjectForm.value).subscribe((res: any) => {

    });
  }
}
