import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHeaderComponent } from './order/order-header/order-header.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderListComponent } from './order/order-list/order-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderHeaderComponent,
    OrderLinesComponent,
    OrderListComponent
  ]
})
export class IZModule { }
