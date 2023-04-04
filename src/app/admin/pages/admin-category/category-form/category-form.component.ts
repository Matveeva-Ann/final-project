import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  deleteObject,
  getDownloadURL,
  percentage,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  ICategoryRequest,
  ICategoryResponse,
} from 'src/app/shared/interface/categoryInterface/category-interface';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent {
  @Input() sendCategoryEdit!: ICategoryResponse;
  @Output() pressToggle = new EventEmitter<void>();

  public categoryForm!: FormGroup;
  editStatus = false;
  idCategory = 0;
  addedFile = false;
  uploadPercent = 0;
  url = '';


  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryServiceService,
    private storage: Storage
  ) {}

  ngOnInit(): void {
    this.initCategory();
  }

  initCategory(): void {
    this.categoryForm = this.fb.group({
      title: [null],
      path: [null],
      img: [null],
    });
    if (this.sendCategoryEdit) {
      console.log(this.sendCategoryEdit)
      this.addedFile = true;
      this.editStatus = true;
      this.idCategory = this.sendCategoryEdit.id;
      this.categoryForm.patchValue({
        title: this.sendCategoryEdit.title,
        path: this.sendCategoryEdit.path,
        img: this.sendCategoryEdit.img,
      });

    }
  }

  addCategory() {
    if (this.editStatus) {
      this.categoryService
        .updateCategory(this.categoryForm.value, this.idCategory)
        .subscribe();
    } else {
      this.categoryService.addCategory(this.categoryForm.value).subscribe();
    }
    this.editStatus = false;
    this.categoryForm.reset();
    this.pressToggle.emit();
  }

  uploadImg(event: any): void {
    const file = event.target.files[0];
    console.log(file);
    this.uploadFile('category', file.name, file).then((data) => {
      this.categoryForm.patchValue({
        img: data,
      });
      console.log(file);
      this.addedFile = true;
    });
  }
  async uploadFile(
    folder: string,
    name: string,
    file: File | null
  ): Promise<string> {
    const path = `${folder}/${name}`;
    if (file) {
      const storageRef = ref(this.storage, path); //формує шлях куди завантажувати файл Об'єкт storage представляє Firebase Storage а рядок path вказує на шлях до певного місця в Firebase Storage, де будуть зберігатися файли.
      const task = uploadBytesResumable(storageRef, file); // загружає файл на Firebase Перший параметр storageRef є об'єктом, який вказує на місце, куди файл буде завантажуватися. Другий параметр file є файлом, який буде завантажено.
      percentage(task).subscribe((data) => {
        this.uploadPercent = data.progress;
      });
      await task;
      this.url = await getDownloadURL(storageRef);

    }
    return Promise.resolve(this.url);
  }
  deleteImg():void{
    const task = ref(this.storage, this.valueByControl('img'));
    this.uploadPercent = 0;
    deleteObject(task).then (()=>{
      console.log('file deleted');
      this.addedFile = false;
      this.categoryForm.patchValue({
        img: null
      })
    })
  }
  valueByControl(control: string): string {
    return this.categoryForm.get(control)?.value;
  }
}
