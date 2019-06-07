import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderHeader } from './order-header';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderServiceMock {

    private orders: Order[] = [
        {
            orderHeader: {
                orderCustomerName: "Super U",
                orderDate: new Date("10/06/2019")
            },
            orderLines: [
                {
                    label: "Chocolat",
                    quantity: 3
                },
                {
                    label: "Jus d'orange",
                    quantity: 2
                }
            ]
        },
        {
            orderHeader: {
                orderCustomerName: "Carrefour",
                orderDate: new Date("05/31/2019")
            },
            orderLines: [
                {
                    label: "Papier aluminium",
                    quantity: 1
                },
                {
                    label: "Yaourts",
                    quantity: 23
                },
                {
                    label: "Mouchoirs",
                    quantity: 10
                }
            ]
        }
    ];

    getOrders(): Observable<Order[]> {
        return of(this.orders);
    }
}