import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor(private http: HttpClient) { }
  getProfessorById(profId) {
    return this.http.get(`http://localhost:3000/professor/${profId}`);
  }
}
