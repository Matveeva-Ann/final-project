import { Component } from '@angular/core';
import { IPromoResponse } from 'src/app/shared/interface/promotionsInterface/promotions-interface';

@Component({
  selector: 'app-admin-promotions',
  templateUrl: './admin-promotions.component.html',
  styleUrls: ['./admin-promotions.component.scss']
})
export class AdminPromotionsComponent {
  public sendPromo?: IPromoResponse;
  public addPromotion = 'table';
  
  public addPromotionBtn(){
    if (this.addPromotion === 'table'){
      this.addPromotion ='forma';
    }else{
      this.addPromotion = 'table';
    }
  }

  public toggleWindow():void{
    this.addPromotion = 'table';
    this.sendPromo = undefined;
  }
  public sendEditPromo(promo: IPromoResponse):void{
    this.addPromotion = 'forma';
    this.sendPromo = promo;
  }
}
