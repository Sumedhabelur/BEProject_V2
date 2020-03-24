import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentId;
  student;

  constructor(private http: HttpClient, private router: Router) {

    this.studentId = this.router.url.split('/')[2];
    this.getStudentById(this.studentId).subscribe((student: any) => {
      this.student = student;
    });
   }

  getStudentById(studentId) {
    return this.http.get(`http://localhost:3000/student/${studentId}`);
  }

  updateStudByField(studentId, updateType, fieldToUpdate) {
    return this.http.put(`http://localhost:3000/student/update/${studentId}`, {
      updateType,
      field: fieldToUpdate
    });
  }
}
