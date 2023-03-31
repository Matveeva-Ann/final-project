import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-promotions',
  templateUrl: './admin-promotions.component.html',
  styleUrls: ['./admin-promotions.component.scss']
})
export class AdminPromotionsComponent {
  addPromotion = 'table';
  addPromotionBtn(){
    if (this.addPromotion === 'table'){
      this.addPromotion ='forma';
    }else{
      this.addPromotion = 'table';
    }
  }
}
