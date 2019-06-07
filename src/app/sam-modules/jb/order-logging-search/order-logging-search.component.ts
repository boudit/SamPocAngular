import { Component, OnInit } from '@angular/core';
import { OrderLoggingService } from '../services/order-logging.service';

@Component({
  selector: 'jb-order-logging-search',
  templateUrl: './order-logging-search.component.html',
  styleUrls: ['./order-logging-search.component.css']
})
export class OrderLoggingSearchComponent implements OnInit {

  customerCode: string;

  constructor(private orderLoggingCustomerService: OrderLoggingService) {    
  }

  ngOnInit() {
  }

  onCustomerKeyDown(event) {
    if (event.key === "Enter") {
      this.orderLoggingCustomerService.search(this.customerCode);
    }
  }
}
