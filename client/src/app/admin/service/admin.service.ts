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

  getFeesByClass(data) {
    return this.http.get(`http://localhost:3000/studentFee/class/${data}`);
  }

  updateFee(feeId, updateType, fieldToUpdate) {
    return this.http.put(`http://localhost:3000/studentFee/update/${feeId}`, {
      updateType,
      field: fieldToUpdate
    });
  }

  updateFee2(feeId, body) {
    return this.http.put(`http://localhost:3000/studentFee/update/${feeId}`, body);
  }

  getFeeById(feeId) {
    return this.http.get(`http://localhost:3000/studentFee/${feeId}`);
  }
}

