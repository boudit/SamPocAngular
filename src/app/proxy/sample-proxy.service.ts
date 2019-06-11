import { Injectable } from '@angular/core';
import { SampleDto } from './dto/sample-dto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SampleProxyService {

  private samplesUrl = 'api/samples';
    
  constructor(private httpClient: HttpClient) { }

  getSamples(): Observable<SampleDto[]>
  {
    return this.httpClient
    .get<SampleDto[]>(this.samplesUrl)
    .pipe(catchError(this.handleError<SampleDto[]>('getSamples', [])));
  }

  getSample(code: string): Observable<SampleDto> {
    const url = `${this.samplesUrl}/${code}`;
    return this.httpClient.get<SampleDto>(url)
    .pipe(catchError(this.handleError<SampleDto>('getSample'))
    )
  }

  addSample (sample: SampleDto): Observable<SampleDto> {
    return this.httpClient
    .post<SampleDto>(this.samplesUrl, sample, httpOptions)
    .pipe(catchError(this.handleError<SampleDto>('addSample'))
    );
  }

  updateSample (sample: SampleDto): Observable<any> {
    return this.httpClient
    .put(this.samplesUrl, sample, httpOptions)
    .pipe(catchError(this.handleError<any>('updateSample'))
    );
  }

  /* GET samples whose name contains search term */
  searchSamples(term: string): Observable<SampleDto[]> {
    
    if (!term.trim()) {
      return of([]);
    }

    return this.httpClient
    .get<SampleDto[]>(`${this.samplesUrl}/?name=${term}`)
    .pipe(catchError(this.handleError<SampleDto[]>('searchSamples', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }
}
