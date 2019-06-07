import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/sam-modules/iz/order/order';
import { OrderServiceMock } from 'src/app/sam-modules/iz/order/order-service-mock';

@Component({
  selector: 'iz-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  selectedOrder: Order;

  orders: Order[];  

  constructor(private orderServiceMock: OrderServiceMock) { }

  ngOnInit() {
    this.orderServiceMock.getOrders().subscribe(orders => this.orders = orders);
  }

  onSelectedOrder(order: Order){
    this.selectedOrder = order;
  }
}
