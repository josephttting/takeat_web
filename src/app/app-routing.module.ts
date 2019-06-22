'use strict';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ManageRestaurantComponent } from './manage-restaurant/manage-restaurant.component';
import { SystemViewComponent } from './system-view/system-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'order', component: OrderComponent },
  { path: 'login', component: LoginComponent},
  { path: 'myorder', component: MyOrderComponent },
  { path: 'managerestaurant', component: ManageRestaurantComponent },
  { path: 'systemview', component: SystemViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
