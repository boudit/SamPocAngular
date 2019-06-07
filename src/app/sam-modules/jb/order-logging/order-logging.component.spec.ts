import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLoggingComponent } from './order-logging.component';

describe('OrderLoggingComponent', () => {
  let component: OrderLoggingComponent;
  let fixture: ComponentFixture<OrderLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
