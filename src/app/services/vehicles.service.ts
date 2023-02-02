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
export class VehiclesService {
  // private nodeApiUrl: string = '/api';
  private nodeApiUrl: string = 'http://226b122.mars1.mars-hosting.com';
  // private nodeApiUrl: string =  environment.API_URL;
  token;
  user;

  constructor(private httpClient: HttpClient) {

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
  getVehiclesById(id) {
    return this.httpClient
      .get<any>(
        `${this.nodeApiUrl}/api/vehicles?usr_id=${id}`,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'auth-token': this.getToken()
          }),
        }
      )
      .pipe(catchError(this.handleError));
  }
  getVehicleById(id) {
    return this.httpClient
      .get<any>(
        `${this.nodeApiUrl}/api/vehicles/${id}`,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'auth-token': this.getToken()
          }),
        }
      )
      .pipe(catchError(this.handleError));
  }
  // http://226b122.mars1.mars-hosting.com/api/services/2
  getServiceById(ser_id) {
    return this.httpClient
      .get<any>(
        `${this.nodeApiUrl}/api/services/${ser_id}`,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'auth-token': this.getToken() 
          }),
        }
      )
      .pipe(catchError(this.handleError));
  }
  getVehicleServices(vhc_id) {
    return this.httpClient
      .post<any>(
        `${this.nodeApiUrl}/api/services`, {
        vhc_id: vhc_id
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
