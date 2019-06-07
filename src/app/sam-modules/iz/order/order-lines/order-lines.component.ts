import { Component, OnInit, Input } from '@angular/core';
import { OrderLine } from 'src/app/sam-modules/iz/order/order-line';

@Component({
  selector: 'iz-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent implements OnInit {

  private _orderLines: OrderLine[];  
  columnsToDisplay = ['number', 'label', 'quantity'];
  @Input() 
  set orderLines(orderLines: OrderLine[]){
    this._orderLines = orderLines;
  }

  get orderLines(): OrderLine[] {
    return this._orderLines;
  }

  constructor() { }

  ngOnInit() {
  }

}
