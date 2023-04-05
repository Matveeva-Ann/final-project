import { Component } from '@angular/core';
import { IPromoResponse } from 'src/app/shared/interface/promotionsInterface/promotions-interface';
import { PromotionsServiceService } from 'src/app/shared/services/promotionsService/promotions-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cardsArr: IPromoResponse[]=[];

  constructor(private promotionsService: PromotionsServiceService){}

  ngOnInit(): void {
    this.loudPromotions()
  }

  loudPromotions():void{
    this.promotionsService.getPromotions().subscribe(data=>{
      this.cardsArr = data;
    })
  }
}
