import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material-module';

import { OrderLoggingComponent } from './order-logging.component';

@Component({selector: 'jb-order-logging-search', template: ''})
class CustomerSearchStubComponent {}

@Component({selector: 'jb-order-logging-tree-view', template: ''})
class SideTreeViewStubComponent {}

@Component({selector: 'jb-customer-information', template: ''})
class CustomerInformationStubComponent {}

@Component({selector: 'jb-order-information', template: ''})
class OrderInformationStubComponent {}

@Component({selector: 'jb-sample-information', template: ''})
class SampleInformationStubComponent {}

describe('OrderLoggingComponent', () => {
  let component: OrderLoggingComponent;
  let fixture: ComponentFixture<OrderLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        OrderLoggingComponent,
        CustomerSearchStubComponent,
        SideTreeViewStubComponent,
        CustomerInformationStubComponent,
        OrderInformationStubComponent,
        SampleInformationStubComponent
      ],
      imports: [
        MaterialModule
      ]
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
