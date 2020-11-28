import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PREFIX = 'https://localhost:44330/';
  constructor(private httpClient: HttpClient) { }

  public get (entity:string) {
    return this.httpClient.get(`${this.PREFIX}${entity}`);
  }
  public post (entity:string, data:any) {
    return this.httpClient.post(`${this.PREFIX}${entity}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  public put (entity:string, data:any) {
    return this.httpClient.put(`${this.PREFIX}${entity}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  public delete (entity:string) {
    return this.httpClient.delete(`${this.PREFIX}${entity}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
