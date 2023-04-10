import { Component, EventEmitter, Output } from '@angular/core';
import { getDownloadURL, percentage, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';

@Component({
  selector: 'app-goods-form',
  templateUrl: './goods-form.component.html',
  styleUrls: ['./goods-form.component.scss'],
})
export class GoodsFormComponent {
  public allCategories: ICategoryResponse[] = [];
  public goodsArr: IGoodsResponse[] = [];
  public goodsForm!: FormGroup;
  public uploadPercent = 0;
  public addedFile = false;
  public editStatus = false;
  public selectedCategory = '';
  public url = '';

  constructor(
    private categoryService: CategoryServiceService,
    private goodsService: GoodsServiceService,
    private fb: FormBuilder,
    private storage: Storage,

  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.initGoods();
    this.initGoodsForm();
  }

  initGoodsForm() {
    this.goodsForm = this.fb.group({
      category: [null, Validators.required],
      title: [null, Validators.required],
      path: [null, Validators.required],
      ingredients: [null, Validators.required],
      weight: [null, Validators.required],
      price: [null, Validators.required],
      img: [null, Validators.required],
      count: 1,
    });
  }
  

  initGoods(): void {
    this.goodsService.getGoods().subscribe((data) => {
      this.goodsArr = data;
    });
  }

  addGoods() {
    this.goodsService.addGoods(this.goodsForm.value).subscribe();
    location.reload();
  }



  getCategories() {
    this.categoryService.getCategory().subscribe((data) => {
      this.allCategories = data;
    });
  }

  deleteImg() {}


  addFile(event: any): void {
    const file = event.target.files[0];
    this.uploadFile('product', file.name, file).then((data) => {
      this.goodsForm.patchValue({
        img: data,
      });
      this.addedFile = true;
    });
  }
  async uploadFile( folder: string, name: string, file: File | null): Promise<string> {
    const path = `${folder}/${name}`;
    if (file) {
      const storageRef = ref(this.storage, path); 
      const task = uploadBytesResumable(storageRef, file); 
      percentage(task).subscribe((data) => {
        this.uploadPercent = data.progress;
      });
      await task;
      this.url = await getDownloadURL(storageRef);
    }
    return Promise.resolve(this.url);
  }
}
