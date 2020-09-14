import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRegistrationFormComponent } from './professor-registration-form.component';

describe('ProfessorRegistrationFormComponent', () => {
  let component: ProfessorRegistrationFormComponent;
  let fixture: ComponentFixture<ProfessorRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
