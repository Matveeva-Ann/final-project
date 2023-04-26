import { Component, Input } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {
  public addCategory= true;
  public sendCategoryEdit?: ICategoryResponse;
  public categoryArr: ICategoryResponse[]=[]
  
  constructor(private categoryService: CategoryServiceService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

 async loadCategories() {
      this.categoryService.getCategory().subscribe((data) => {
        this.categoryArr = data;
      });
    }


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
