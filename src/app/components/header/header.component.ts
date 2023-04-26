import { Component } from '@angular/core';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { OrderServiceService } from 'src/app/shared/services/orderService/order-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public willCall = false;
  public countProd = 0;
  public priseProd = 0;
  public showBasketProduct = false;

  constructor(private orderService: OrderServiceService) {}

  closeFormCall(): void {
    this.willCall = false;
  }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
  }

  loadBasket(): void {
    const allBasket = JSON.parse(localStorage.getItem('basket') as string);
    this.countProd = allBasket.length;
    this.priseProd = allBasket.reduce(
      (accum: number, elem: IGoodsResponse) =>
        accum + Number(elem.price) * elem.count, 0);
  }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    });
  }

  changeBasket():void{
    this.loadBasket();
  }

  closeBasket():void{
    this.showBasketProduct = false;
  }
}
