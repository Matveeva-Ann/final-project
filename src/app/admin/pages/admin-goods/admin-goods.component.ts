import { Component } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';

@Component({
  selector: 'app-admin-goods',
  templateUrl: './admin-goods.component.html',
  styleUrls: ['./admin-goods.component.scss'],
})
export class AdminGoodsComponent {
  public editProduct?: IGoodsResponse;
  public openForm = false;
  public productChanged?: boolean;
  
  addCategoryBtn() {
    this.openForm = !this.openForm;
  }
  sendEditProduct(product:IGoodsResponse):void{
    this.editProduct = product;
      this.openForm = true;
  }

  addChangProduct():void{
    this.openForm = false;
    this.productChanged = true;
    this.editProduct = undefined;
  }
  changeStatusProductChanged():void{
    this.productChanged = undefined;
  }
 
}
