import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DeliveryPaymentComponent } from './components/header/burger-menu/delivery-payment/delivery-payment.component';
import { AboutUsComponent } from './components/header/burger-menu/about-us/about-us.component';
import { PromotionsComponent } from './components/header/burger-menu/promotions/promotions.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {path:'delivery and payment', component: DeliveryPaymentComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'promotions', component: PromotionsComponent},
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
