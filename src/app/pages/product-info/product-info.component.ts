import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  public currentProduct!:IGoodsResponse;
  public showIngredients = true;

  constructor(
    private activatedRoute:ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(response =>{
      this.currentProduct = response['productInfo'];
      if (this.currentProduct.ingredients === null){
        this.showIngredients = false;
      }else{
        this.showIngredients = true;
      }
    })   
  }
  
}
