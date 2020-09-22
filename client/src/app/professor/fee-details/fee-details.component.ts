import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../service/professor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.css']
})
export class FeeDetailsComponent implements OnInit {

  listForm: FormGroup;
  fees = [];

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.onClassSelect();
  }

  buildForm() {
    this.listForm = this.fb.group({
      class: ['SE', Validators.required]
    });
  }

  onClassSelect() {
    const data = this.listForm.get('class').value;
    this.getFeesByClass(data);
  }

  getFeesByClass(data) {
    this.professorService.getFeesByClass(data).subscribe((response: any) => {
      this.fees = response.result;
    });
  }

}
