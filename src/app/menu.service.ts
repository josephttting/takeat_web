import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  apiURL: string = 'http://localhost:3000/api/menu';

  constructor(private httpClient: HttpClient) {

  };

  public ListMenu(id): Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(this.apiURL + `/list/${id}`);
  };
}
