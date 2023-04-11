import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';

@Component({
  selector: 'app-goods-table',
  templateUrl: './goods-table.component.html',
  styleUrls: ['./goods-table.component.scss'],
})
export class GoodsTableComponent {
  @Output() sendEditProduct = new EventEmitter<IGoodsResponse>();
  @Output() changeStatusProductChanged = new EventEmitter<void>();
  @Input() productChanged?: boolean;
  public goodsArr: IGoodsResponse[] = [];

  constructor(private goodsService: GoodsServiceService) {}

  ngOnInit(): void {
    this.getAllGoods();
  }
  ngOnChanges(changes: any): void {
    if (changes.productChanged){
      this.getAllGoods();
      this.changeStatusProductChanged.emit();
    }
  }
  getAllGoods() {
    this.goodsService.getGoods().subscribe((data) => {
      this.goodsArr = data;
    });
  }
  editProduct(product: IGoodsResponse) {
    this.sendEditProduct.emit(product);
  }
  deleteProduct(product: IGoodsResponse) {
    this.goodsService.deleteGoods(product.id).subscribe(() => {
      this.getAllGoods();
    });
  }
}
