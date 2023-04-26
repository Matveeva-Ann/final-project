import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IGoodsResponse } from '../../interface/goodsInterface/goods-interface';
import { GoodsServiceService } from '../goodsSevice/goods-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoResolver implements Resolve<IGoodsResponse> {

  constructor(
    private goodsService:GoodsServiceService
  ){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGoodsResponse> {
    return this.goodsService.getOneGood(Number(route.paramMap.get('id')))
  }
}
