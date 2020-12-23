import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {MyaccountSidebarComponent} from '../components/myaccount-sidebar/myaccount-sidebar.component';
import {MyaccountAccountComponent} from '../components/myaccount-account/myaccount-account.component';
import {MyaccountAddressComponent} from '../components/myaccount-address/myaccount-address.component';
import {MyaccountDashboardComponent} from '../components/myaccount-dashboard/myaccount-dashboard.component';
import {MyaccountOrdersComponent} from '../components/myaccount-orders/myaccount-orders.component';
import {MyaccountPaymentComponent} from '../components/myaccount-payment/myaccount-payment.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myaccount', component: MyaccountSidebarComponent}, // parent and all rest chidlrenm
  {path: 'myaccount/account', component: MyaccountAccountComponent},
  {path: 'myaccount/address', component: MyaccountAddressComponent},
  {path: 'myaccount/dashboard', component: MyaccountDashboardComponent},
  {path: 'myaccount/orders', component: MyaccountOrdersComponent},
  {path: 'myaccount/payment', component: MyaccountPaymentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
