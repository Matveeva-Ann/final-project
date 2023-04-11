import { Component, Input } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {
  // private tableArrCategory: string[] = ["№", "Назва", "Шлях", "Картинка", "Дії"];
  public addCategory= true;
  public sendCategoryEdit?: ICategoryResponse;

  public addCategoryBtn(){
   this.addCategory = !this.addCategory;
  }
  public editedCategory(category: ICategoryResponse){
    this.sendCategoryEdit = category;
    this.addCategory = !this.addCategory;
  }

  public pressToggle():void{
    this.addCategory = !this.addCategory;
    this.sendCategoryEdit = undefined;
  }
 
}
