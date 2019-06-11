import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { OrderLoggingScreenService } from '../services/order-logging-screen.service';

@Component({
  selector: 'jb-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {

  public customer: Customer;

  constructor(private customerService: OrderLoggingScreenService) {
  }
  
  ngOnInit() {
    this.customerService.postCustomer.subscribe(data => this.LoadData(data))
  }

  LoadData(data: Customer) {
    if(this.customer && data.Code === this.customer.Code) {
      return;
    }

    this.customer = data;
  }
}