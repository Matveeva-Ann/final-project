import { Component } from '@angular/core';
import { IPromoResponse } from 'src/app/shared/interface/promotionsInterface/promotions-interface';

@Component({
  selector: 'app-admin-promotions',
  templateUrl: './admin-promotions.component.html',
  styleUrls: ['./admin-promotions.component.scss']
})
export class AdminPromotionsComponent {
  sendPromo?: IPromoResponse;
  addPromotion = 'table';
  addPromotionBtn(){
    if (this.addPromotion === 'table'){
      this.addPromotion ='forma';
    }else{
      this.addPromotion = 'table';
    }
  }

  toggleWindow():void{
    this.addPromotion = 'table';
    this.sendPromo = undefined;
  }
  sendEditPromo(promo: IPromoResponse):void{
    this.addPromotion = 'forma';
    this.sendPromo = promo;
  }
}
