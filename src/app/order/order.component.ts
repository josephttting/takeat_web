'use strict';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  orderList: Array<any> = [];
  total: number = 0;
  user: any;
  now: Date = new Date();
  address: string = '';
  phone: string = '';

  constructor(private orderServ: OrderService, private router: Router) {

  }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('order')) !== null) {
      this.orderList = JSON.parse(localStorage.getItem('order'));
      this.CountTotal();
    };

    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    };
  };

  CountTotal() {
    this.total = 0;
    for(let i = 0; i < this.orderList.length; i++) {
      this.total = this.total + (this.orderList[i].price * this.orderList[i].quantity);
    };
  };

  SendOrder() {
    this.now = new Date();
    let order = {
      orderer: this.user._id,
      orderer_name: this.user.name,
      create_time: this.now,
      address: this.address,
      phone: this.phone,
      restaurant: this.orderList[0].restaurant,
      total_price: this.total,
      dishes: this.orderList
    };

    this.orderServ.AddOrder(order);
    localStorage.removeItem('order');
    localStorage.removeItem('dishCount');
    this.router.navigateByUrl('/home');
  };
}
