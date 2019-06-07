import { Component, OnInit, Input } from '@angular/core';
import { OrderHeader } from 'src/app/sam-modules/iz/order/order-header';

@Component({
  selector: 'iz-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {

  private _orderHeader: OrderHeader;

  @Input() 
  set orderHeader(orderHeader: OrderHeader){
    this._orderHeader = orderHeader;
  }

  get orderHeader(): OrderHeader {
    return this._orderHeader;
  }

  constructor() { }

  ngOnInit() {
  }

}
