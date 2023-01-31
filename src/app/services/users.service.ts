import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private nodeApiUrl: string = '/api';
  // private nodeApiUrl: string = 'http://226b122.mars1.mars-hosting.com';
  token;
  user;

  constructor(private httpClient: HttpClient) {

  }

  getAllUsers() {
    let sid = localStorage.getItem('token')


    return this.httpClient
      .post<any>(
        `${this.nodeApiUrl}/api/users`,
        {
          sid: sid,
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'auth-token': this.getToken()
          }),
        }
      )
      .pipe(catchError(this.handleError));
  }
  getUsers(): Observable<any> {
    let sid = localStorage.getItem('token')
    return this.httpClient
      .get<any>(
        `${this.nodeApiUrl}/api/users`,
        {
          params:{sid:sid},
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'auth-token': this.getToken()
          }),
        }
      )
      .pipe(catchError(this.handleError));
  }

  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    }
    if (errorResponse.status == 403) {
      return throwError(`${errorResponse.status}`);
    }
    if (errorResponse.status == 404) {
      return throwError(`${errorResponse.status}`);
    }
    if (errorResponse.status == 500) {
      return throwError(`${errorResponse.status}`);
    }
    return throwError(errorResponse);
  }
}

    // /api/mostovi/listBetweenCoordinates?lat1=45.175&lat2=45.180&long1=20.085&long2=20.075
