import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentId(studentId: any) {
    throw new Error("Method not implemented.");
  }
  getStudentById(studentId: string) {
    throw new Error("Method not implemented.");
  }
  updateStudByField(studentId: any, updateType: any, value: any) {
    throw new Error("Method not implemented.");
  }

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
