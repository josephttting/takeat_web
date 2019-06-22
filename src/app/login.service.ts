import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from './restaurant'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL: string = 'http://localhost:3000/api/login';
  loginUser: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private httpClient: HttpClient) {

  };

  emitLoginUser(user) {
    this.loginUser.next(user);
  };

  LoginToTakeat(email, password): Observable<any>{
    let login = {
      email: email,
      password: password
    };

    let headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });

    let options = {
      headers
    };

    return this.httpClient.post<any>(this.apiURL, JSON.stringify(login), options);
  };
  
}
