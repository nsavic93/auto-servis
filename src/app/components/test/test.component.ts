import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  baseURL: 'http://321z122.mars1.mars-hosting.com/';
  constructor(private httpClient: HttpClient) {}
  private nodeApiUrl: string = "/api";
  private API_URL= environment.API_URL;
  ngOnInit(): void {
    this.getData().subscribe((data) => {
      console.log(data);
      
    })
  }
  // http://226b122.mars1.mars-hosting.com/api/test

  getData() {
    return this.httpClient
      .get<any>(`${this.API_URL}/api/test`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          //'auth-token': this.getToken()
        }),
      })
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
