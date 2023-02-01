import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token;
  user;
  //   isLogged = false
  isLoggedValue: Observable<any>;
  private isLoggedValueSubject = new BehaviorSubject<any>(null);

  isAdminValue: Observable<any>;
  private isAdminValueSubject = new BehaviorSubject<any>(null);


  constructor(private httpClient: HttpClient) {
    this.isLoggedValue = this.isLoggedValueSubject.asObservable();
    this.isAdminValue = this.isAdminValueSubject.asObservable();
  }

  // private nodeApiUrl: string = '/api';
  // private nodeApiUrl: string = 'http://226b122.mars1.mars-hosting.com';
  private nodeApiUrl: string =  environment.API_URL;
  public setLoginStatus(value) {
    this.isLoggedValueSubject.next(value);
  }
  public setAdminStatus(value) {
    this.isAdminValueSubject.next(value);
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
  isAdmin(sid): Observable<any> {
    return this.httpClient
      .post<any>(
        `${this.nodeApiUrl}/api/isAdmin`,
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
