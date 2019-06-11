import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHeaderItemComponent } from './order-header-item.component';

describe('OrderHeaderItemComponent', () => {
  let component: OrderHeaderItemComponent;
  let fixture: ComponentFixture<OrderHeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHeaderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
