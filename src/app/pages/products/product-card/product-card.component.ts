import { Component } from '@angular/core';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  goodsArr: IGoodsResponse[]=[]

  constructor(private goodsService:GoodsServiceService){

  }

  ngOnInit(): void {
    this.initGoods();
  }

  initGoods():void{
    this.goodsService.getGoods().subscribe((data)=>{
      this.goodsArr = data;
    })
  }
}
