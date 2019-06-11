import { Injectable } from '@angular/core';
import { OrderServiceMock } from '../order-service-mock';
import { Observable, of } from 'rxjs';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  private _isInEditMode = false;
  private _isInInsertMode = false;
  private _selectedOrder = null;

  constructor(private orderServiceMock: OrderServiceMock) { }

  selectOrder(order: Order){
    this._selectedOrder = order;
  }

  getSelectedOrder(): Observable<Order>{
    return of(this._selectedOrder);
  }

  enterEditMode(){
    this._isInEditMode = true;
  }

  cancelEditMode(){
    this._isInEditMode = false;
  }

  enterInsertMode(){
    this._isInInsertMode = true;
  }

  cancelInsertMode(){
    this._isInInsertMode = false;
  }

  getInsertMode(): boolean{
    return this._isInInsertMode;
  }

  getEditMode(): boolean{
    return this._isInEditMode;
  }

  loadOrders(): Observable<Order[]>{
    return this.orderServiceMock.getOrders();
  }
}
