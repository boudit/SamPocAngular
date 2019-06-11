import { Component, OnInit, Input } from '@angular/core';
import { OrderHeader } from '../../order-header';

@Component({
  selector: 'app-order-header-item',
  templateUrl: './order-header-item.component.html',
  styleUrls: ['./order-header-item.component.css']
})
export class OrderHeaderItemComponent implements OnInit {

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
