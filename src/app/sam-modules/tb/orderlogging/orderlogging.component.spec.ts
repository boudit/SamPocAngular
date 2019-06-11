import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderloggingComponent } from './orderlogging.component';

describe('OrderloggingComponent', () => {
  let component: OrderloggingComponent;
  let fixture: ComponentFixture<OrderloggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderloggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderloggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
