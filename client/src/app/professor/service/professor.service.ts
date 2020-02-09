import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfessorService {

  professorId;

  constructor(private http: HttpClient, private router: Router) {

    console.log('this.router.url', this.router.url)
    this.professorId = this.router.url.split('/')[2];
  }

  uploadFile(data) {
    return this.http.post("http://localhost:3000/note/upload", data);
  }

  uploadNotice(data) {
    return this.http.post("http://localhost:3000/notice/upload", data);
  }

  getNotes() {
    return this.http.get("http://localhost:3000/note");
  }

  getNotice() {
    return this.http.get("http://localhost:3000/notice");
  }
}
