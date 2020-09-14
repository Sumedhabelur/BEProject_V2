import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFeesComponent } from './get-fees.component';

describe('GetFeesComponent', () => {
  let component: GetFeesComponent;
  let fixture: ComponentFixture<GetFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
