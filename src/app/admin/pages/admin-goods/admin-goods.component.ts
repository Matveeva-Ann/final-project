import { Component } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';

@Component({
  selector: 'app-admin-goods',
  templateUrl: './admin-goods.component.html',
  styleUrls: ['./admin-goods.component.scss'],
})
export class AdminGoodsComponent {
 
  public addCategory = false;
  
  addCategoryBtn() {
    this.addCategory = !this.addCategory;
  }
  
}
