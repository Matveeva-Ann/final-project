import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';


export type TitleKeys = {
  title: string;
  key: keyof ICategoryResponse;
}

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
})
export class CategoryTableComponent {
  @Output() editedCategory = new EventEmitter<ICategoryResponse>();

  public titleKeysArr: TitleKeys[] = [
    {
      title: 'Назва',
      key: 'title',
    },
    {
      title: 'Шлях',
      key: 'path',
    },
    
  ];


  public categoryArr: ICategoryResponse[] = [];

  constructor(private categoryService: CategoryServiceService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.categoryArr = data;
    });
  }

  editPress(category: ICategoryResponse): void {
    this.editedCategory.emit(category);
  }

  deletePress(category: ICategoryResponse): void {
    this.categoryService.deleteCategory(category.id).subscribe(() => {
      this.loadCategories();
    });
  }
}
