import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLoggingSearchComponent } from './order-logging-search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';

describe('OrderLoggingSearchComponent', () => {
  let component: OrderLoggingSearchComponent;
  let fixture: ComponentFixture<OrderLoggingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLoggingSearchComponent ],
      imports: [
        FormsModule,
        MaterialModule
      ]
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
