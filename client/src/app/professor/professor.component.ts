import { Component, OnInit } from '@angular/core';
import { ProfessorService } from './service/professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  professor;
  constructor(
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.professorService.getProfessorById( this.professorService.professorId).subscribe((professor: any) => {
      this.professor = professor.result;
    });
  }

}
