import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material-module';

import { CustomerComponent } from './customer/customer.component';
import { OrderloggingComponent } from './orderlogging/orderlogging.component';
import { SearchcustomersComponent } from './searchcustomers/searchcustomers.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { SamplesComponent } from './samples/samples.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [CustomerComponent, OrderloggingComponent, SearchcustomersComponent, CustomersComponent, OrdersComponent, OrderComponent, SamplesComponent, SampleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TBModule { }
