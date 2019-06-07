import { Component, OnInit, Input } from '@angular/core';
import { OrderHeader } from 'src/app/sam-modules/iz/order/order-header';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'iz-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {

  private _orderHeader: OrderHeader;

  get orderHeader(): OrderHeader {
    return this._orderHeader;
  }

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.getSelectedOrder().subscribe(order => this._orderHeader = order.orderHeader);
  }

}
