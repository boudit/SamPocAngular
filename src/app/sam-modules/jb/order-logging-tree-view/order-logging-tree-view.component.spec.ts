import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLoggingTreeViewComponent } from './order-logging-tree-view.component';

describe('OrderLoggingTreeViewComponent', () => {
  let component: OrderLoggingTreeViewComponent;
  let fixture: ComponentFixture<OrderLoggingTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLoggingTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLoggingTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
