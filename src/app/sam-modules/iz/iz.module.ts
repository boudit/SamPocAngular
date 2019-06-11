import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHeaderComponent } from './order/order-header/order-header.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrdersComponent } from './order/orders/orders.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { OrderHeaderEditComponent } from './order/order-header/order-header-edit/order-header-edit.component';
import { OrderHeaderItemComponent } from './order/order-header/order-header-item/order-header-item.component';

@NgModule({
  declarations: [
    OrderHeaderComponent,
    OrderLinesComponent,
    OrderListComponent,
    OrdersComponent,
    OrderHeaderEditComponent,
    OrderHeaderItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule  
  ]  
})
export class IZModule { }
