import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private eventSubscription!: Subscription;
  public userProducts: IGoodsResponse[] = [];

  constructor(private goodsService: GoodsServiceService){}

  ngOnInit(): void {
    this.loadGoods();
  }

  loadGoods():void{
    this.eventSubscription = this.goodsService.getGoodsByCategory('roli').subscribe((data)=>{
      this.userProducts = data;
    })
  }
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }
}
