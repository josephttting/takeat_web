'use strict';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.less']
})
export class MyOrderComponent implements OnInit {
  orderList: Array<any> = [];
  user: any;

  constructor(private orderServ: OrderService) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.ListOrder();
    };
  };

  ListOrder() {
    return this.orderServ.ListOrderByUser(this.user._id).subscribe((results: any[]) => {
      this.orderList = results;
      console.log(this.orderList);
    });
  };
}
