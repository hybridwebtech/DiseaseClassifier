import { TestBed } from '@angular/core/testing';

import { KidneydiseaseService } from './kidneydisease.service';

describe('KidneydiseaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KidneydiseaseService = TestBed.get(KidneydiseaseService);
    expect(service).toBeTruthy();
  });
});
