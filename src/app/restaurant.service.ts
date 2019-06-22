import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from './restaurant'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiURL: string = 'http://localhost:3000/api/restaurant';

  constructor(private httpClient: HttpClient) {

  };

  public ListRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.apiURL);
  };

  public ListRestaurantWithOrder(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiURL + '/withorder');
  }

  public UpdateRestaurant(entity){
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

  public GetRestaurant(id): Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(this.apiURL + `/${id}`);
  };

  public GetRestaurantByUser(id): Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(this.apiURL + `/user/${id}`);
  };

  public GetRestaurantWithOrder(id): Observable<any>{
    return this.httpClient.get<any>(this.apiURL + `/withorder/${id}`);
  };
}
