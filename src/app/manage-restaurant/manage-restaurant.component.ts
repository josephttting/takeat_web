'use strict';
import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Dish } from '../dish';

@Component({
  selector: 'app-manage-restaurant',
  templateUrl: './manage-restaurant.component.html',
  styleUrls: ['./manage-restaurant.component.less']
})
export class ManageRestaurantComponent implements OnInit {
  restaurant: any;
  user: any;
  dishList: any[];

  constructor(private restServ: RestaurantService, private dishServ: DishService) {

  };

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.GetRestaurant();
    };
  };

  GetRestaurant() {
    return this.restServ.GetRestaurantByUser(this.user._id).subscribe((result: Restaurant) => {
      this.restaurant = result;
      this.ListDish();
    });
  };

  ListDish() {
    return this.dishServ.ListDish(this.restaurant._id).subscribe((results: Dish[]) => {
      this.dishList = results;
    });
  };

  SaveRestaurant() {
    this.restServ.UpdateRestaurant(this.restaurant);
  };
  
  UpdateDish(dish) {
    this.dishServ.UpdateDish(dish);
  };

}
