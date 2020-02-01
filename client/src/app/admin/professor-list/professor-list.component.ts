import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../service/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professors = [];

  constructor(
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.getAllProfessors();
  }

  getAllProfessors() {
    this.professorService.getAllProfessors().subscribe((response: any) => {
      this.professors = response.result;
    });
  }
}
