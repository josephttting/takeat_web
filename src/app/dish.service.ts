import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dish } from './dish'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  apiURL: string = 'http://localhost:3000/api/dish';

  constructor(private httpClient: HttpClient) {

  }

  public ListDish(restaurant_id): Observable<Dish[]>{
    return this.httpClient.get<Dish[]>(this.apiURL + '/list/' + restaurant_id);
  };

  public UpdateDish(entity) {
    let headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    let options = {
      headers
    };
    this.httpClient.put<any>(this.apiURL, JSON.stringify(entity), options).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  };
}
