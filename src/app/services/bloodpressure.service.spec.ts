import { TestBed } from '@angular/core/testing';

import { BloodpressureService } from './bloodpressure.service';

describe('BloodpressureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodpressureService = TestBed.get(BloodpressureService);
    expect(service).toBeTruthy();
  });
});
