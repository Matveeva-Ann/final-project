import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WillCallComponent } from './components/header/will-call/will-call.component';
import { MainComponent } from './components/main/main.component';
import { BurgerMenuComponent } from './components/header/burger-menu/burger-menu.component';
import { DeliveryPaymentComponent } from './components/header/burger-menu/delivery-payment/delivery-payment.component';
import { AboutUsComponent } from './components/header/burger-menu/about-us/about-us.component';
import { PromotionsComponent } from './components/header/burger-menu/promotions/promotions.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/home/info/info.component';
import { ArticleComponent } from './pages/home/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WillCallComponent,
    MainComponent,
    BurgerMenuComponent,
    DeliveryPaymentComponent,
    AboutUsComponent,
    PromotionsComponent,
    HomeComponent,
    InfoComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
