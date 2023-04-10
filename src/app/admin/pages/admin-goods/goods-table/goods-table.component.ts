import { Component, Input } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.scss']
})
export class GoodsTableComponent {
 
  public goodsArr: IGoodsResponse []=[];

  constructor(private goodsService: GoodsServiceService){}

  ngOnInit(): void {
    this.getAllGoods();
  }
 
  getAllGoods(){
    this.goodsService.getGoods().subscribe((data)=>{
      this.goodsArr = data;
    })
  }

  editProduct(product:IGoodsResponse){
  }

  deleteProduct(product: IGoodsResponse){
  }
  
}
