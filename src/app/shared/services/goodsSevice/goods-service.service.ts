import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';
import { IGoodsRequest, IGoodsResponse } from '../../interface/goodsInterface/goods-interface';

@Injectable({
  providedIn: 'root'
})
export class GoodsServiceService{
  private url = environment.BACKEND_URL;
  private api = {goods: `${this.url}/goods`}

  constructor(private http: HttpClient) { }

  getGoods(): Observable<IGoodsResponse[]>{
    return this.http.get<IGoodsResponse[]>(this.api.goods)
  }

  getGoodsByCategory (name: string): Observable<IGoodsResponse[]>{
    return this.http.get<IGoodsResponse[]>(`${this.api.goods}?categoryPath=${name}`)
  }

  getOneGood(id: number): Observable<IGoodsResponse>{
    return this.http.get<IGoodsResponse>(`${this.api.goods}/${id}`);
  }


  addGoods(goods: IGoodsRequest): Observable<IGoodsRequest>{
    return this.http.post<IGoodsRequest>(this.api.goods, goods);
  }

  deleteGoods(id:number): Observable<void>{
    return this.http.delete<void>(`${this.api.goods}/${id}`);
  }

  updateGoods(goods:IGoodsRequest, id:number):Observable<IGoodsResponse>{
    return this.http.patch<IGoodsResponse>(`${this.api.goods}/${id}`, goods);
  }


  
}
