import { Component, OnInit } from '@angular/core';
import { ProfessorService } from './service/professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  prof;
  constructor(
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.prof = this.professorService.professor.firstName;
    console.log('this.prof', this.prof);
  }

}
