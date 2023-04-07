import { Component } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';

@Component({
  selector: 'app-nav-pages',
  templateUrl: './nav-pages.component.html',
  styleUrls: ['./nav-pages.component.scss']
})
export class NavPagesComponent {
  public categoriesArr: ICategoryResponse[] = [];

  constructor(private categoryService: CategoryServiceService){
  }

  ngOnInit(): void {
    this.allCategories();
  }

  private allCategories(){
    this.categoryService.getCategory().subscribe(data=>{
      this.categoriesArr = data;
    })
  }

}
