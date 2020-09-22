import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.css']
})
export class FeeDetailsComponent implements OnInit {

  student ;

  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.getStudentFeeById(this.studentService.studentId);
  }

  getStudentFeeById(data) {
    this.studentService.getFeeById(data).subscribe((res: any) => {
      this.student = res.result[0];
      console.log(this.student);
      console.log(this.student.class);
      console.log('Success');
    });
  }
}
