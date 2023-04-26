import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IPromoResponse } from 'src/app/shared/interface/promotionsInterface/promotions-interface';
import { PromotionsServiceService } from 'src/app/shared/services/promotionsService/promotions-service.service';

@Component({
  selector: 'app-promotions-info',
  templateUrl: './promotions-info.component.html',
  styleUrls: ['./promotions-info.component.scss']
})
export class PromotionsInfoComponent {
  public currentPromo!:IPromoResponse;
  public textArr: Array<string>= [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private promoService:PromotionsServiceService,
  ){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(response =>{
      this.currentPromo = response['promoInfo'];
      this.textArr = this.currentPromo.description.split('$');
    })
  }

}
