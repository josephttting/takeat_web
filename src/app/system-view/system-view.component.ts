'use strict';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-system-view',
  templateUrl: './system-view.component.html',
  styleUrls: ['./system-view.component.less']
})
export class SystemViewComponent implements OnInit {
  restaurantList: Restaurant[];

  constructor(private restServ: RestaurantService, private orderServ: OrderService) { }

  ngOnInit() {
    this.ListRestaurant();
  };

  ListRestaurant() {
    return this.restServ.ListRestaurantWithOrder().subscribe((results: Restaurant[]) => {
      this.restaurantList = results;
    });
  };

}
