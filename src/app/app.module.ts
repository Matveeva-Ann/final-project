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
import { DeliveryPaymentComponent } from './pages/delivery-payment/delivery-payment.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/home/info/info.component';
import { ArticleComponent } from './pages/home/article/article.component';
import { ModalWindowComponent } from './shared/components/modal-window/modal-window.component';
import { NavPagesComponent } from './components/header/nav-pages/nav-pages.component';
import { MapComponent } from './pages/delivery-payment/map/map.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminOrderComponent } from './admin/pages/admin-order/admin-order.component';
import { AdminGoodsComponent } from './admin/pages/admin-goods/admin-goods.component';
import { AdminCategoryComponent } from './admin/pages/admin-category/admin-category.component';
import { AdminPromotionsComponent } from './admin/pages/admin-promotions/admin-promotions.component';
import { CategoryTableComponent } from './admin/pages/admin-category/category-table/category-table.component';
import { CategoryFormComponent } from './admin/pages/admin-category/category-form/category-form.component';
import { PromotionsTableComponent } from './admin/pages/admin-promotions/promotions-table/promotions-table.component';
import { PromotionsFormaComponent } from './admin/pages/admin-promotions/promotions-forma/promotions-forma.component';
import { OfertaComponent } from './pages/oferta/oferta.component';



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
    ArticleComponent,
    ModalWindowComponent,
    NavPagesComponent,
    MapComponent,
    AdminComponent,
    AdminNavComponent,
    AdminOrderComponent,
    AdminGoodsComponent,
    AdminCategoryComponent,
    AdminPromotionsComponent,
    CategoryTableComponent,
    CategoryFormComponent,
    PromotionsTableComponent,
    PromotionsFormaComponent,
    OfertaComponent,
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
