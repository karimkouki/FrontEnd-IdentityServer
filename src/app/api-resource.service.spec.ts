import { TestBed } from '@angular/core/testing';

import { ApiResourceService } from './api-resource.service';

describe('ApiResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiResourceService = TestBed.get(ApiResourceService);
    expect(service).toBeTruthy();
  });
});
