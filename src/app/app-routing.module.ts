import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DeliveryPaymentComponent } from './pages/delivery-payment/delivery-payment.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {path:'deliveryPayment', component: DeliveryPaymentComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'promotions', component: PromotionsComponent},
  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
