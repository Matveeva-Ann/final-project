import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WillCallComponent } from './components/header/will-call/will-call.component';
import { BurgerMenuComponent } from './components/header/burger-menu/burger-menu.component';
import { DeliveryPaymentComponent } from './pages/delivery-payment/delivery-payment.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/home/info/info.component';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { CardComponent } from './pages/promotions/card/card.component';
import { ProductsComponent } from './pages/products/products.component';
import { InfoDeliverySushiComponent } from './pages/home/info-delivery-sushi/info-delivery-sushi.component';
import { SushiNavigationComponent } from './pages/home/sushi-navigation/sushi-navigation.component';
import { GoodsTableComponent } from './admin/pages/admin-goods/goods-table/goods-table.component';
import { GoodsFormComponent } from './admin/pages/admin-goods/goods-form/goods-form.component';
import { ProductCardComponent } from './pages/products/product-card/product-card.component';
import { CarrouselComponent } from './pages/home/carrousel/carrousel.component';
import { AddingPhotoComponent } from './shared/components/adding-photo/adding-photo.component';
import { TableComponent } from './admin/pages/table/table.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { PromotionsInfoComponent } from './pages/promotions-info/promotions-info.component';
import { ControlsComponent } from './shared/components/controls/controls.component';
import { BasketComponent } from './pages/basket/basket.component';
import { BreadCrumbsComponent } from './shared/components/bread-crumbs/bread-crumbs.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WillCallComponent,
    BurgerMenuComponent,
    DeliveryPaymentComponent,
    AboutUsComponent,
    PromotionsComponent,
    HomeComponent,
    InfoComponent,
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
    CardComponent,
    ProductsComponent,
    InfoDeliverySushiComponent,
    SushiNavigationComponent,
    GoodsTableComponent,
    GoodsFormComponent,
    ProductCardComponent,
    CarrouselComponent,
    AddingPhotoComponent,
    TableComponent,
    ProductInfoComponent,
    PromotionsInfoComponent,
    ControlsComponent,
    BasketComponent,
    BreadCrumbsComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    TextMaskModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
