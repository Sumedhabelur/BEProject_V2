import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  uploadFile(data) {
    return this.http.post('http://localhost:3000/note/upload', data);
  }

  uploadNotice(data) {
    return this.http.post('http://localhost:3000/notice/upload', data);
  }

  getNotes() {
    return this.http.get('http://localhost:3000/note');
  }

  getNotice() {
    return this.http.get('http://localhost:3000/notice');
  }
}
