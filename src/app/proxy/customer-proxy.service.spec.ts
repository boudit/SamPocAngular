import { TestBed } from '@angular/core/testing';

import { CustomerProxyService } from './customer-proxy.service';

describe('CustomerProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerProxyService = TestBed.get(CustomerProxyService);
    expect(service).toBeTruthy();
  });
});
