import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  constructor(private http: HttpClient) { }

  registerProfessor(data) {
    return this.http.post('http://localhost:3000/professor/register', data);
  }
  getAllProfessors() {
    return this.http.get('http://localhost:3000/professor');
  }
}
