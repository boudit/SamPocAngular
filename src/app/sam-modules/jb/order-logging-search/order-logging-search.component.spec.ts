import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLoggingSearchComponent } from './order-logging-search.component';

describe('OrderLoggingSearchComponent', () => {
  let component: OrderLoggingSearchComponent;
  let fixture: ComponentFixture<OrderLoggingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLoggingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLoggingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
