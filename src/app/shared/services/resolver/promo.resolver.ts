import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPromoResponse } from '../../interface/promotionsInterface/promotions-interface';
import { PromotionsServiceService } from '../promotionsService/promotions-service.service';

@Injectable({
  providedIn: 'root'
})
export class PromoResolver implements Resolve<IPromoResponse> {

  constructor(
    private promotionsService:PromotionsServiceService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPromoResponse> {
    return this.promotionsService.getOnePromotion(Number(route.paramMap.get('id')));
  }
}