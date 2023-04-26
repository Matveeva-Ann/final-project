import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { deleteObject, getDownloadURL, percentage, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';
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
  @Input() editProduct?: IGoodsResponse = undefined;
  @Output() addChangProduct = new EventEmitter<void>();

  public allCategories: ICategoryResponse[] = [];
  public goodsForm!: FormGroup;
  public uploadPercent = 0;
  public addedFile = false;
  public editStatus = false;
  public selectedCategory = '';
  public url = '';
  private idEditedProduct = 0;
  public category = '';
 public sendEditImg!: string
  constructor(
    private categoryService: CategoryServiceService,
    private goodsService: GoodsServiceService,
    private fb: FormBuilder,
    private storage: Storage,
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.initGoodsForm();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["editProduct"].currentValue){
      this.initGoodsForm();
    }
  }

  private initGoodsForm() {
    this.goodsForm = this.fb.group({
      category: ["*Виберіть категорію", Validators.required],
      categoryPath: [null],
      title: [null, Validators.required],
      path: [null, Validators.required],
      ingredients: [null],
      weight: [null, Validators.required],
      unit: "г",
      price: [null, Validators.required],
      img: [null],
      count: 1,
    });
    if(this.editProduct){
      this.addedFile = true;
      this.editStatus = true;
      this.category = this.editProduct.category;
      this.idEditedProduct = this.editProduct.id;
      this.url = this.editProduct.img;
      this.goodsForm.patchValue({
        category: this.editProduct.category,
        categoryPath: this.editProduct.categoryPath,
        title: this.editProduct.title,
        path: this.editProduct.path,
        ingredients: this.editProduct.ingredients,
        weight: this.editProduct.weight,
        unit: this.editProduct.unit,
        price: this.editProduct.price,
        img: this.editProduct.img,
        count: 1,
      })
    }
  }
  
  public addGoods() {
    const index = this.allCategories.findIndex(category => category.title === this.goodsForm.value.category);
    console.log(index)
    this.goodsForm.patchValue({
       categoryPath: this.allCategories[index].path,
    })

    if (this.editProduct){
      this.goodsService.updateGoods(this.goodsForm.value, this.idEditedProduct).subscribe();
    }else{
      this.goodsService.addGoods(this.goodsForm.value).subscribe(()=>{});
    }
    this.addedFile = false;
    this.editStatus = false;
    this.goodsForm.reset();
    this.addChangProduct.emit();
  }

  getCategories() {
    this.categoryService.getCategory().subscribe((data) => {
      this.allCategories = data;
    });
  }

  deleteImg() {
    const task = ref(this.storage, this.valueByControl('img'));
    this.uploadPercent = 0;
    deleteObject(task).then (()=>{
      this.addedFile = false;
      this.goodsForm.patchValue({
        img: null,
      })
    })
  }
  
  valueByControl(control: string): string {
    console.log(this.goodsForm.get('img')?.value);
    this.sendEditImg = this.goodsForm.get('img')?.value;
    return this.goodsForm.get(control)?.value;
  }


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
      if(this.editProduct){
       this.editProduct.img =  this.url;
      }
    }
    return Promise.resolve(this.url);
  }
}
