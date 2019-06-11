import { Component, OnInit } from '@angular/core';
import { OrderLoggingScreenService } from '../services/order-logging-screen.service';

@Component({
  selector: 'jb-order-logging-search',
  templateUrl: './order-logging-search.component.html',
  styleUrls: ['./order-logging-search.component.css']
})
export class OrderLoggingSearchComponent implements OnInit {

  customerCode: string;

  constructor(private orderLoggingCustomerService: OrderLoggingScreenService) {    
  }

  ngOnInit() {
  }

  onCustomerKeyDown(event) {
    if (event.key === "Enter") {
      this.orderLoggingCustomerService.search(this.customerCode);
    }
  }
}
