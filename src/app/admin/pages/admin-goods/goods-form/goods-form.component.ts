import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';

@Component({
  selector: 'app-goods-form',
  templateUrl: './goods-form.component.html',
  styleUrls: ['./goods-form.component.scss']
})
export class GoodsFormComponent {
  public allCategories: ICategoryResponse[]=[];
  public goodsArr: IGoodsResponse[] = [];
  public goodsForm!: FormGroup;
  public uploadPercent = 0;
  public addedFile = false;
  public editStatus = false;

  constructor(private categoryService: CategoryServiceService,
              private goodsService: GoodsServiceService,
              private fb: FormBuilder,
     ){}

  ngOnInit(): void {
    this.getCategories();
    this.initGoods();
    this.initGoodsForm();
  }

  initGoods():void{
    this.goodsService.getGoods().subscribe((data)=>{
      this.goodsArr = data;
    })
  }

  initGoodsForm(){
    this.goodsForm = this.fb.group({
      category: [null, Validators.required],
      title: [null, Validators.required],
      path: [null, Validators.required],
      ingredients: [null, Validators.required],
      weight: [null, Validators.required],
      price: [null, Validators.required],
      img: [null, Validators.required],      
    })
  }


  getCategories(){
    this.categoryService.getCategory().subscribe((data)=>{
      this.allCategories = data;
    })
  }

  deleteImg(){}

  addGoods(){
    this.goodsService.addGoods(this.goodsForm.value).subscribe();
  }
}
