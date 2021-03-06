import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  // loginStudent(data) {
  //   return this.http.post('http://localhost:3000/student/login', data);
  // }

  registerStudent(data) {
    return this.http.post('http://localhost:3000/student/register', data);
  }

  getAllStudent() {
    return this.http.get('http://localhost:3000/student');
  }

  getStudentByClass(data) {
    return this.http.get(`http://localhost:3000/student/class/${data}`);

  }
}
