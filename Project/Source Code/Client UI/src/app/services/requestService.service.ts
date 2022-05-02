import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
    token:any;
  constructor(private httpClient: HttpClient) {}

  loginUser(request: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    });
    return this.httpClient
      .post('http://localhost:5000/api/users/login', request)
      .pipe(map((response) => response));
  }

  allUsers(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    });
    return this.httpClient
      .get('http://localhost:5000/api/profile/all')
      .pipe(map((response) => response));
  }

  getProfile(): Observable<any> {
      this.token = sessionStorage.getItem("JWTToken");
    let headers = new HttpHeaders({
      'Authorization': this.token,
    });
    return this.httpClient
      .get('http://localhost:5000/api/profile', {headers: headers})
      .pipe(map((response) => response));
  }
}
