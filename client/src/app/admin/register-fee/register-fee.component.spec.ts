import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFeeComponent } from './register-fee.component';

describe('RegisterFeeComponent', () => {
  let component: RegisterFeeComponent;
  let fixture: ComponentFixture<RegisterFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
