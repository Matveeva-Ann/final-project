import { Component, EventEmitter, Output } from '@angular/core';
import { IPromoResponse } from 'src/app/shared/interface/promotionsInterface/promotions-interface';
import { PromotionsServiceService } from 'src/app/shared/services/promotionsService/promotions-service.service';

@Component({
  selector: 'app-promotions-table',
  templateUrl: './promotions-table.component.html',
  styleUrls: ['./promotions-table.component.scss'],
})
export class PromotionsTableComponent {
  @Output() sendEditPromo = new EventEmitter<IPromoResponse>();
  public promotionsArr: IPromoResponse[] = [];

  constructor(private promoService: PromotionsServiceService) {}

  ngOnInit(): void {
    this.loadPromo();
  }

  private loadPromo(): void {
    this.promoService.getPromotions().subscribe((data) => {
      this.promotionsArr = data;
    });
  }

  public editPromo(promo: IPromoResponse): void {
    this.sendEditPromo.emit(promo);
  }

  public deletePromo(promo: IPromoResponse): void {
    this.promoService.deletePromo(promo.id).subscribe(() => {
      this.loadPromo();
    });
  }  
}
