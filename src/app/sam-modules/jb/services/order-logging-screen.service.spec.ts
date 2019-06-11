import { TestBed } from '@angular/core/testing';

import { OrderLoggingScreenService } from './order-logging-screen.service';

describe('OrderLoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderLoggingScreenService = TestBed.get(OrderLoggingScreenService);
    expect(service).toBeTruthy();
  });
});
