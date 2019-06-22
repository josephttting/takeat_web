'use strict';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { DishService } from '../dish.service';
import { Restaurant } from '../restaurant';
import { Dish } from '../dish';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.less']
})
export class RestaurantComponent implements OnInit {
  restaurant_id: String;
  restaurant: Restaurant;
  dishList: Dish[];
  orderList: Array<any> = [];
  dishCount: number = 0;

  constructor(private restServ: RestaurantService, private dishServ: DishService
    , private activatedRoute: ActivatedRoute) {
    this.restaurant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.restaurant = {
      '_id': '',
      'name': '',
      'description': '',
      'address': '',
      'phone': '',
      'rate': 0,
      'cover_image': ''
    };
  }

  ngOnInit() {
    this.GetRestaurant();

    if(JSON.parse(localStorage.getItem('order')) !== null) {
      this.orderList = JSON.parse(localStorage.getItem('order'));
    };

    if(JSON.parse(localStorage.getItem('dishCount')) !== null) {
      this.dishCount = Number.parseInt(localStorage.getItem('dishCount'));
    };
  };

  GetDishFromOrder(id) {
    if(this.orderList) {
      return this.orderList.find(item => item._id === id);
    }
    else {
      return null;
    };
  };

  GetRestaurant() {
    return this.restServ.GetRestaurant(this.restaurant_id).subscribe((result: Restaurant) => {
      this.restaurant = result;
      this.ListDish('');
      console.log(this.restaurant);
    });
  };

  ListDish(menu_id) {
    return this.dishServ.ListDish(this.restaurant._id).subscribe((results: Dish[]) => {
      this.dishList = results;
    });
  };

  OrderDish(dish) {
    let targetDish = this.GetDishFromOrder(dish._id);
    
    if(targetDish === undefined) {
      dish.quantity = 1;
      this.orderList.push(dish);
    }
    else
    {
      targetDish.quantity = targetDish.quantity + 1;
    };
    
    this.dishCount = this.dishCount + 1;
    localStorage.setItem('dishCount', this.dishCount.toString());
    localStorage.setItem('order', JSON.stringify(this.orderList));
  };
  
}
