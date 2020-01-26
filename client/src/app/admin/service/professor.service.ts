import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  http: any;

  constructor() { }

  registerProfessor(data) {
    return this.http.post('http://localhost:3000/professor/register', data);
  }
}
