import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getNoticeByClass(data) {
    return this.http.get(`http://localhost:3000/notice/class/${data}`);
  }

  getLectureByClass(data) {
    return this.http.get(`http://localhost:3000/lecture/class/${data}`);
  }

  getStudentByClass(data) {
    return this.http.get(`http://localhost:3000/student/class/${data}`);
  }

  registerFees(data) {
    return this.http.post('http://localhost:3000/studentFee/register', data);
  }
}
