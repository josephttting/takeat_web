import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from './restaurant'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiURL: string = 'http://localhost:3000/api/order';

  constructor(private httpClient: HttpClient) {

  }

  public AddOrder(order) {
    let headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    let options = {
      headers
    };
    this.httpClient.post<any>(this.apiURL, JSON.stringify(order), options).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  };

  public ListOrderByUser(user_id): Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiURL + '/user/' + user_id);
  };

}
