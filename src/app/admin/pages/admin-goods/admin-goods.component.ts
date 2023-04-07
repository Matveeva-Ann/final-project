import { Component } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';

@Component({
  selector: 'app-admin-goods',
  templateUrl: './admin-goods.component.html',
  styleUrls: ['./admin-goods.component.scss'],
})
export class AdminGoodsComponent {
  public addCategory = true;
  // public sendCategoryEdit?: ICategoryResponse;

  addCategoryBtn() {
    this.addCategory = !this.addCategory;
  }
  editedCategory(category: ICategoryResponse) {
    //     this.sendCategoryEdit = category;
    //     this.addCategory = 'forma';
  }

  pressToggle(): void {
    //     this.addCategory = 'table';
    //     this.sendCategoryEdit = undefined;
  }
}
