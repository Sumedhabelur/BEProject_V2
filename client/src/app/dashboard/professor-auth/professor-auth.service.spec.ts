import { TestBed } from '@angular/core/testing';

import { ProfessorAuthService } from './professor-auth.service';

describe('ProfessorAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessorAuthService = TestBed.get(ProfessorAuthService);
    expect(service).toBeTruthy();
  });
});
