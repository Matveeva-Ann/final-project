import { Component } from '@angular/core';
import { IPromoResponse } from 'src/app/shared/interface/promotionsInterface/promotions-interface';

@Component({
  selector: 'app-admin-promotions',
  templateUrl: './admin-promotions.component.html',
  styleUrls: ['./admin-promotions.component.scss']
})
export class AdminPromotionsComponent {
  public sendPromo?: IPromoResponse;
  public addPromotion = true;
  
  public addPromotionBtn(){
    this.addPromotion = !this.addPromotion;
  }

  public toggleWindow():void{
    this.addPromotion = !this.addPromotion;
    this.sendPromo = undefined;
  }
  public sendEditPromo(promo: IPromoResponse):void{
    this.addPromotion = !this.addPromotion;
    this.sendPromo = promo;
  }
}
