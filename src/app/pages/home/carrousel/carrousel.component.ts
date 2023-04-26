import { Component, Optional } from '@angular/core';
import { IPromoResponse } from 'src/app/shared/interface/promotionsInterface/promotions-interface';
import { PromotionsServiceService } from 'src/app/shared/services/promotionsService/promotions-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent {
  public promoArr: IPromoResponse[] = [];

  constructor(private promotionsService: PromotionsServiceService) {}

  ngOnInit(): void {
    this.getPromo();
  }

  getPromo(): void {
    this.promotionsService.getPromotions().subscribe((data) => {
      this.promoArr = data;
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    items: 2,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true, 
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      900: {
        items: 2
      }
    }
}

}