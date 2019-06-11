import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/sam-modules/iz/order/order';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'iz-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {  

  orders: Order[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.loadOrders().subscribe(orders => this.orders = orders);
  }

  onSelectOrder(order: Order){
    this.ordersService.selectOrder(order);   
  }
}
