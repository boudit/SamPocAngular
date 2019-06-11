import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SampleDto } from '../dto/sample-dto';
import { OrderDto } from '../dto/order-dto';
import { CustomerDto } from '../dto/customer-dto';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let customers = this.createCustomers(10);

    let orders: OrderDto[] = [];
    customers.forEach(customer => {
      orders.push(...customer.orders);
    });

    let samples: SampleDto[] = [];
    orders.forEach(order => {
      samples.push(...order.samples);
    })

    return {customers, orders, samples};
  }

  createCustomers(nbCreation: number): CustomerDto[]{

    var result: CustomerDto[] = [];

    for (let index = 0; index < nbCreation; index++) {
      const element = nbCreation;
      
      var customer = { code : `${element}`, name: `Customer ${element}`, comment: "comment" } as CustomerDto;
      customer.orders = this.getOrdersForCustomer(customer, index + 2);

      result.push(customer);
    }

    return result;
  }

  getOrdersForCustomer(customer: CustomerDto, nbCreation: number): OrderDto[]{

    var result: OrderDto[] = [];

    for (let index = 0; index < nbCreation; index++) {
      const element = nbCreation;
      
      var order = { code : `${customer.code}-${element}`, date : new Date(Date.now() + 1), receptionDate : new Date(Date.now()), internalReference : 'Internal Reference', logisticReference: "Logistic Reference", reference: "Reference", description : `description for sample ${element}`, invoiceDetails: "InvoiceDetails" } as OrderDto;
      order.samples = this.getSamplesForOrder(order, index + 2);

      result.push(order);
    }

    return result;
  }

  getSamplesForOrder(order: OrderDto, nbCreation: number): SampleDto[]{

    var result: SampleDto[] = [];

    for (let index = 0; index < nbCreation; index++) {
      const element = nbCreation;
      
      result.push({ code : `${order.code}-${element}`, comment : `Comment for sample ${element}`, description : `description for sample ${element}` });
    }

    return result;
  }

  constructor() { }
}
