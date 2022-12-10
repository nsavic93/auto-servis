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
export class LoginService {
  token;
  user;
  //   isLogged = false
  isLoggedValue: Observable<any>;
  private isLoggedValueSubject = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) {
    this.isLoggedValue = this.isLoggedValueSubject.asObservable();
  }

  private nodeApiUrl: string = '/api';
  public setLoginStatus(value) {
    this.isLoggedValueSubject.next(value);
  }
  isLoggedIn(sid) {
    return this.httpClient
      .post<any>(
        `${this.nodeApiUrl}/api/isLoggedIn`,
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
  login(username, password) {
    return this.httpClient
      .post<any>(
        `${this.nodeApiUrl}/api/login`,
        {
          username: username,
          password: password,
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
  logout(sid){
    console.log(sid);
    
    return this.httpClient
      .post<any>(
        `${this.nodeApiUrl}/api/logout`,
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
