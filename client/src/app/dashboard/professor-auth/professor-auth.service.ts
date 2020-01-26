import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorAuthService {

  constructor(private http: HttpClient) {}

  loginProfessor(data) {
    return this.http.post('http://localhost:3000/professor/login', data);
  }


}
