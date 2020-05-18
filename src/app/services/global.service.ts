import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private summary = `https://api.covid19api.com/summary`;
  private;
  constructor(private http: HttpClient) {}
  getSummary(): Observable<any> {
    return this.http.get<any>(this.summary).pipe(
      retry(3),
      map((res) => res),
      catchError(this.handleError)
    );
  }
  getOneCountry(country): Observable<any> {
    const data = `https://api.covid19api.com/total/dayone/country/` + country;
    return this.http
      .get<any>(data)
      .pipe(retry(2), catchError(this.handleError));
  }
  handleError(error) {
    return throwError(error.message || ' please try in some time again');
  }
}
