import { TestBed } from '@angular/core/testing';

import { IdentityServiceService } from './identity-service.service';

describe('IdentityServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdentityServiceService = TestBed.get(IdentityServiceService);
    expect(service).toBeTruthy();
  });
});
