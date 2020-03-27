import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professorId;
  professor;

  constructor(private http: HttpClient, private router: Router) {

    this.professorId = this.router.url.split('/')[2];
    this.getProfessorById(this.professorId).subscribe((professor: any) => {
      this.professor = professor;
    });
  }

  getProfessorById(professorId) {
    return this.http.get(`http://localhost:3000/professor/${professorId}`);
  }

  uploadNote(data) {
    return this.http.post(`http://localhost:3000/note/upload`, data);
  }

  uploadNotice(data) {
    return this.http.post(`http://localhost:3000/notice/upload`, data);
  }

  getNotes() {
    return this.http.get(`http://localhost:3000/note`);
  }

  getNotice() {
    return this.http.get(`http://localhost:3000/notice`);
  }

  updateProfByField(professorId, updateType, fieldToUpdate) {
    return this.http.put(`http://localhost:3000/professor/update/${professorId}`, {
      updateType,
      field: fieldToUpdate
    });
  }

  getAllSubjects() {
    return this.http.get('http://localhost:3000/subject/');
  }
}
