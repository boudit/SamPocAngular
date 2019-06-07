import { Injectable, Output, EventEmitter } from '@angular/core';
import { Customer } from '../models/customer';
import { CUSTOMERS } from './data';
import { Sample } from '../models/sample';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderLoggingService {

  @Output() postCustomerSearchResult = new EventEmitter<Customer[]>();

  @Output() postCustomer = new EventEmitter<Customer>();

  @Output() postOrder = new EventEmitter<Order>();

  @Output() postSample = new EventEmitter<Sample>();

  constructor() { }

  search(searchString: string) {
    if (!searchString) {
      return;
    }

    this.postCustomerSearchResult.emit(CUSTOMERS);
  }

  getCustomer(code: string) {
    let customer = new Customer();
    customer.Code = CUSTOMERS[0].Code;
    customer.Name = CUSTOMERS[0].Name;
    customer.Description = CUSTOMERS[0].Description;
    customer.Comment = "A simple description";

    this.postCustomer.emit(customer);
  }

  public getOrder(orderCode: string){
    var order = new Order();
    order.Code = orderCode;
    order.Name = orderCode + " name";
    order.Description = orderCode + " description";
    order.Comment = orderCode + " comment";

    this.postOrder.emit(order);
  }

  public clearOrder() {
    this.postOrder.emit(null);
  }

  public getSample(sampleCode: string){
    var sample = new Sample();

    sample.Code = sampleCode;
    sample.Description = sampleCode + " description";
    sample.Comment = sampleCode + " comment";

    this.postSample.emit(sample);
  }

  public clearSample(){
    this.postSample.emit(null);
  }
}
