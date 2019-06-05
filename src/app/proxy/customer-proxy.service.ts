import { Injectable } from '@angular/core';
import { CustomerDto } from './dto/customer-dto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerProxyService {

  private customersUrl = 'api/customers';
    
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<CustomerDto[]>
  {
    return this.httpClient
    .get<CustomerDto[]>(this.customersUrl)
    .pipe(catchError(this.handleError<CustomerDto[]>('getCustomers', [])));
  }

  getCustomer(code: string): Observable<CustomerDto> {
    const url = `${this.customersUrl}/${code}`;
    return this.httpClient.get<CustomerDto>(url)
    .pipe(catchError(this.handleError<CustomerDto>('getCustomer'))
    )
  }

  addCustomer (customer: CustomerDto): Observable<CustomerDto> {
    return this.httpClient
    .post<CustomerDto>(this.customersUrl, customer, httpOptions)
    .pipe(catchError(this.handleError<CustomerDto>('addCustomer'))
    );
  }

  updateCustomer (customer: CustomerDto): Observable<any> {
    return this.httpClient
    .put(this.customersUrl, customer, httpOptions)
    .pipe(catchError(this.handleError<any>('updateCustomer'))
    );
  }

  /* GET customers whose name contains search term */
  searchCustomers(term: string): Observable<CustomerDto[]> {
    
    if (!term.trim()) {
      return of([]);
    }

    return this.httpClient
    .get<CustomerDto[]>(`${this.customersUrl}/?name=${term}`)
    .pipe(catchError(this.handleError<CustomerDto[]>('searchCustomers', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }
}
