import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) {}

    getAllSubjects() {
      return this.http.get('http://localhost:3000/subject/');
    }
}
