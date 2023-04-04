import { Component } from '@angular/core';
import { ICategoryRequest, ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {
  addCategory='table';
  sendCategoryEdit!: ICategoryResponse;

  addCategoryBtn(){
    if(this.addCategory === 'table'){
      this.addCategory = 'forma';
    }else{
      this.addCategory = 'table'
    }
  }
  editedCategory(category: ICategoryResponse){
    this.sendCategoryEdit = category;
    this.addCategory = 'forma';
  }

  pressToggle():void{
    this.addCategory = 'table';
  }
 
}
