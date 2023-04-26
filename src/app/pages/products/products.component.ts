import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public userProducts: Array<IGoodsResponse> = [];
  public categoryTitle = '';
  public showSushiNavigation = false;
  private eventSubscription!: Subscription;

  constructor(
    private goodsService: GoodsServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){
    this.eventSubscription = this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd){
        this.loadGoods();
      }
    })
  }

  ngOnInit(): void {
    this.loadGoods();
  }

  loadGoods():void{
    const categoryName = this.activatedRoute.snapshot.paramMap.get('category') as string;
    if (categoryName === 'roli'){
      this.showSushiNavigation = true;
    }else{
      this.showSushiNavigation = false;
    }
    this.goodsService.getGoodsByCategory(categoryName).subscribe((data)=>{
      this.userProducts = data;
      this.categoryTitle = data[0].category;
    })
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }
}
