import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './order/order.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ManageRestaurantComponent } from './manage-restaurant/manage-restaurant.component';
import { SystemViewComponent } from './system-view/system-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RestaurantComponent,
    OrderComponent,
    MyOrderComponent,
    ManageRestaurantComponent,
    SystemViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
