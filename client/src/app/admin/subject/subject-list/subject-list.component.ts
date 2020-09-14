import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects = [];

  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.getAllSubjects();
  }
  getAllSubjects() {
    this.subjectService.getAllSubjects().subscribe((response: any) => {
      this.subjects = response.result;
    });
  }
}
