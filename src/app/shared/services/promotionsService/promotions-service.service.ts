import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';
import { IPromoRequest, IPromoResponse } from '../../interface/promotionsInterface/promotions-interface';

@Injectable({
  providedIn: 'root'
})
export class PromotionsServiceService {
  private url = environment.BACKEND_URL;
  private api = {promotions: `${this.url}/promo`};

  constructor(private http:HttpClient) { }

  getPromotions(): Observable<IPromoResponse[]>{
    return this.http.get<IPromoResponse[]>(this.api.promotions);
  }

  getOnePromotion(id: number): Observable<IPromoResponse>{
    return this.http.get<IPromoResponse>(`${this.api.promotions}/${id}`);
  }

  addPromo(promo: IPromoRequest): Observable<IPromoRequest>{
    return this.http.post<IPromoRequest>(this.api.promotions, promo);
  }

  deletePromo(id:number): Observable <void>{
    return this.http.delete<void>(`${this.api.promotions}/${id}`);
  }

  updatePromo(promo:IPromoRequest, id:number): Observable<IPromoResponse>{
    return this.http.patch<IPromoResponse>(`${this.api.promotions}/${id}`, promo);
  }
}
