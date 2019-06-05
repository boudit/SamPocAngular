import { TestBed } from '@angular/core/testing';

import { SampleProxyService } from './sample-proxy.service';

describe('SampleProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleProxyService = TestBed.get(SampleProxyService);
    expect(service).toBeTruthy();
  });
});
