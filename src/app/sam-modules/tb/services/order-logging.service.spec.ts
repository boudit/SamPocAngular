import { TestBed } from '@angular/core/testing';

import { OrderLoggingService } from './order-logging.service';

describe('OrderLoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderLoggingService = TestBed.get(OrderLoggingService);
    expect(service).toBeTruthy();
  });
});
