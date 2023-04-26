import { Component, Input } from '@angular/core';
import { IGoodsResponse } from '../../interface/goodsInterface/goods-interface';
import { OrderServiceService } from '../../services/orderService/order-service.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  @Input() currentProduct!: IGoodsResponse;
  @Input() styleBasket = true;


  constructor(
    private orderService:OrderServiceService,
  ){}

  productCount(product: IGoodsResponse, value:boolean):void{
    if (value){
      ++product.count;
    } else if (!value && product.count > 1){
      --product.count;
    }
  }

  productCountBasket(product: IGoodsResponse, value:boolean): void{
    this.productCount(product, value);
    let basket: Array<IGoodsResponse> = [];
    basket = JSON.parse(localStorage.getItem('basket') as string);
    const index = basket.findIndex((elem) => elem.id === product.id);
    basket[index].count = product.count;
    localStorage.setItem('basket', JSON.stringify(basket))
    this.orderService.changeBasket.next(true);
  }


  addToBasket(product: IGoodsResponse):void{
    let basket: Array<IGoodsResponse> = [];
    if(localStorage.getItem('basket')){
      basket = JSON.parse(localStorage.getItem('basket') as string);
      if (basket.some((item) => item.id ===  product.id)){
        const index = basket.findIndex((elem) => elem.id === product.id);
        basket[index].count += product.count;
      }else{
        basket.push(product);
      }
    }else{
      basket.push(product);
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    product.count = 1;
    this.orderService.changeBasket.next(true);
  }

}
