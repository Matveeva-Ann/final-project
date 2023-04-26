import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { IGoodsResponse } from '../../interface/goodsInterface/goods-interface';

interface IDataArr {
  category: string;
  categoryPath: string;
  title: string;
  isProduct?: string;
}

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent {
  @Input() way!: any;

  public dataArr!: IDataArr;

  constructor(
  ){ }

  ngOnInit(): void {
    if(this.way.categoryPath === 'action'){
      this.dataArr = {
        category: "Акції",
        categoryPath: 'promotions',
        title: this.way.promoTitle,
        isProduct: '',
      }
    } else if (this.way.categoryPath !== 'action'){
      this.dataArr = {
          category: this.way.category,
          isProduct: 'products',
          categoryPath: this.way.categoryPath,
          title: this.way.title,
        }
    }
  }
 

}
