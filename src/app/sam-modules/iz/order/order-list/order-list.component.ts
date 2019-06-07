import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/sam-modules/iz/order/order';

@Component({
  selector: 'iz-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {  

  @Input() orders: Order[];
  @Output() orderSelected = new EventEmitter<Order>();

  constructor() { }

  ngOnInit() {
  }

  onSelectOrder(order: Order){
    this.orderSelected.emit(order);
  }
}
