import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/sam-modules/iz/order/order';
import { OrderServiceMock } from 'src/app/sam-modules/iz/order/order-service-mock';
import { OrdersService } from './orders.service'

@Component({
  selector: 'iz-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {

  private _selectedOrder: Order;

  get selectedOrder(): Order{
    return this._selectedOrder;
  }

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {    
    this.ordersService.getSelectedOrder().subscribe(order => this._selectedOrder = order);
  }
}
