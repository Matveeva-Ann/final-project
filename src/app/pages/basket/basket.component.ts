import { Component, EventEmitter, Output } from '@angular/core';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { OrderServiceService } from 'src/app/shared/services/orderService/order-service.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  @Output() changeBasket = new EventEmitter<void>();
  public orderProducts: Array<IGoodsResponse> = [];
  public priseProd = 0;
  public styleBasket = false;

  constructor(
    private orderService:OrderServiceService,
  ){}

  ngOnInit(): void {
    this.loudProducts();
  }

  loudProducts(): void {
    this.orderProducts = JSON.parse(localStorage.getItem('basket') as string);
    this.priseProd = this.orderProducts.reduce(
      (accum: number, elem: IGoodsResponse) =>
        accum + Number(elem.price) * elem.count, 0);
    this.orderService.changeBasket.subscribe(()=>{
    this.loudProducts();
  })
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  deleteProduct(product: IGoodsResponse): void {
    const index = this.orderProducts.findIndex(
      (item) => item.id === product.id
    );
    this.orderProducts.splice(index, 1);
    localStorage.setItem('basket', JSON.stringify(this.orderProducts));
    this.loudProducts();
    this.changeBasket.emit();
  }
}
