import { Component, OnInit, Input } from '@angular/core';
import { OrderHeader } from '../../order-header';

@Component({
  selector: 'app-order-header-edit',
  templateUrl: './order-header-edit.component.html',
  styleUrls: ['./order-header-edit.component.css']
})
export class OrderHeaderEditComponent implements OnInit {

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
