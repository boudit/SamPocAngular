import { Component, OnInit } from '@angular/core';
import { OrderLoggingScreenService } from '../services/order-logging-screen.service';
import { Order } from '../models/order';

@Component({
  selector: 'jb-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent implements OnInit {

  public order: Order;

  constructor(private orderLoggingService: OrderLoggingScreenService) {
  }

  ngOnInit() {
    this.orderLoggingService.postOrder.subscribe(data => this.loadData(data))  
  }

  private loadData(data: Order) {
    if(data && this.order && data.Code === this.order.Code){
      return;
    }

    this.order = data;
  }

}