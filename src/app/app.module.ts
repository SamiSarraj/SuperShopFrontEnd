import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {AppRoutingModule} from './routing/AppRoutingModule';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyaccountSidebarComponent } from './components/myaccount-sidebar/myaccount-sidebar.component';
import { MyaccountDashboardComponent } from './components/myaccount-dashboard/myaccount-dashboard.component';
import { MyaccountOrdersComponent } from './components/myaccount-orders/myaccount-orders.component';
import { MyaccountPaymentComponent } from './components/myaccount-payment/myaccount-payment.component';
import { MyaccountAddressComponent } from './components/myaccount-address/myaccount-address.component';
import { MyaccountAccountComponent } from './components/myaccount-account/myaccount-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchBarComponent,
    LoginComponent,
    RegisterComponent,
    MyaccountSidebarComponent,
    MyaccountDashboardComponent,
    MyaccountOrdersComponent,
    MyaccountPaymentComponent,
    MyaccountAddressComponent,
    MyaccountAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
