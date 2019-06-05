import { TestBed } from '@angular/core/testing';

import { OrderProxyService } from './order-proxy.service';

describe('OrderProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderProxyService = TestBed.get(OrderProxyService);
    expect(service).toBeTruthy();
  });
});
