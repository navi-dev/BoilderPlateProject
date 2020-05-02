import { TestBed } from '@angular/core/testing';

import { CommonHttpServiceService } from './common-http-service.service';

describe('CommonHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonHttpServiceService = TestBed.get(CommonHttpServiceService);
    expect(service).toBeTruthy();
  });
});
