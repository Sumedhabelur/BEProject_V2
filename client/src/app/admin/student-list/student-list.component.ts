import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  listForm: FormGroup;
  students = [];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.listForm = this.fb.group({
      class: ['None', Validators.required]
    });
  }

  buildForm() {
    this.listForm = this.fb.group({
      class: ['None', Validators.required]
    });
  }

  onClassSelect() {
    const data = this.listForm.get('class').value;
    this.getStudentByClass(data);
  }

  getStudentByClass(data) {
    this.studentService.getStudentByClass(data).subscribe((response: any) => {
      this.students = response.result;
    });
  }
}
