'use strict';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  restaurantList: Restaurant[];
  
  constructor(private restServ: RestaurantService) {
    localStorage.removeItem('order');
    localStorage.removeItem('dishCount');
  };

  ngOnInit() {
    this.ListRestaurant();
  };

  ListRestaurant() {
    return this.restServ.ListRestaurant().subscribe((results: Restaurant[]) => {
      this.restaurantList = results;
    });
  };
}
