import { map, catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IndiaService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    const allData = `https://api.covid19india.org/data.json`;
    return this.http.get<any>(allData).pipe(
      map((res) => res),
      retry(2),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    return throwError(error.message || 'Internal Server Error');
  }
}
