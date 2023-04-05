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
  promotionsArr: IPromoResponse[] = [];

  constructor(private promoService: PromotionsServiceService) {}

  ngOnInit(): void {
    this.loadPromo();
  }

  loadPromo(): void {
    this.promoService.getPromotions().subscribe((data) => {
      this.promotionsArr = data;
    });
  }

  editPromo(promo: IPromoResponse): void {
    this.sendEditPromo.emit(promo);
  }

  deletePromo(promo: IPromoResponse): void {
    this.promoService.deletePromo(promo.id).subscribe(() => {
      this.loadPromo();
    });
  }
}
