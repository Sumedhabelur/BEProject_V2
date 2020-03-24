import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student;
  // selectedType = 'Student-Edit';

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentService.getStudentById(this.studentService.studentId).subscribe((student: any) => {
      this.student = student.result;
    });
  }

  // selectAuthType(type: any) {
  //   this.selectedType = type;
  // }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
