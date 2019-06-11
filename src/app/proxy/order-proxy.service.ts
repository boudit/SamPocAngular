import { Injectable } from '@angular/core';
import { OrderDto } from './dto/order-dto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderProxyService {

  private ordersUrl = 'api/orders';
    
  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<OrderDto[]>
  {
    return this.httpClient
    .get<OrderDto[]>(this.ordersUrl)
    .pipe(catchError(this.handleError<OrderDto[]>('getOrders', [])));
  }

  getOrder(code: string): Observable<OrderDto> {
    const url = `${this.ordersUrl}/${code}`;
    return this.httpClient.get<OrderDto>(url)
    .pipe(catchError(this.handleError<OrderDto>('getOrder'))
    )
  }

  addOrder (order: OrderDto): Observable<OrderDto> {
    return this.httpClient
    .post<OrderDto>(this.ordersUrl, order, httpOptions)
    .pipe(catchError(this.handleError<OrderDto>('addOrder'))
    );
  }

  updateOrder (order: OrderDto): Observable<any> {
    return this.httpClient
    .put(this.ordersUrl, order, httpOptions)
    .pipe(catchError(this.handleError<any>('updateOrder'))
    );
  }

  /* GET orders whose name contains search term */
  searchOrders(term: string): Observable<OrderDto[]> {
    
    if (!term.trim()) {
      return of([]);
    }

    return this.httpClient
    .get<OrderDto[]>(`${this.ordersUrl}/?name=${term}`)
    .pipe(catchError(this.handleError<OrderDto[]>('searchOrders', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }
}
