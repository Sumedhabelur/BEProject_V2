import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentAttendanceService {



  constructor(private http: HttpClient) { }

  getStudentByClass(data) {
    return this.http.get(`http://localhost:3000/student/class/${data}`);

  }
}
