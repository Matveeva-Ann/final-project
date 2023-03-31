import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {
  addCategory='table';

  addCategoryBtn(){
    if(this.addCategory === 'table'){
      this.addCategory = 'forma';
    }else{
      this.addCategory = 'table'
    }

  }
}
