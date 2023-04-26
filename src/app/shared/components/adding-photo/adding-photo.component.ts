import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import {
  deleteObject,
  getDownloadURL,
  percentage,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';

@Component({
  selector: 'app-adding-photo',
  templateUrl: './adding-photo.component.html',
  styleUrls: ['./adding-photo.component.scss'],
})
export class AddingPhotoComponent {
  @Input() sendEditImg!: string;
  @Input() displayPicture?: string;
  @Output() sendImgToForm = new EventEmitter<string>();
  @Output() sendUrlToForm = new EventEmitter<string>();

  public uploadPercent = 0;
  public addedFile = false;
  public editStatus = false;
  public selectedCategory = '';
  public url = '';
  private idEditedProduct = 0;
  public category = '';
  public editProduct?: string;

  constructor(private storage: Storage) {}

  deleteImg() {
    console.log(this.sendEditImg)
    const task = ref(this.storage, this.sendEditImg);
    this.uploadPercent = 0;
    deleteObject(task).then(() => {
      this.addedFile = false;
      this.sendImgToForm.emit('null');
    });
  }



  ngOnChanges(changes: any): void {
    if(changes.displayPicture){
      this.addedFile = true;
      this.editProduct = this.displayPicture;
    }
  }



  addFile(event: any) {
    const file = event.target.files[0];
    this.uploadFile('product', file.name, file).then((data) => {
      this.sendImgToForm.emit(data);
    });
  }
  async uploadFile(
    folder: string,
    name: string,
    file: File | null
  ): Promise<string> {
    const path = `${folder}/${name}`;
    if (file) {
      const storageRef = ref(this.storage, path);
      const task = uploadBytesResumable(storageRef, file);
      percentage(task).subscribe((data) => {
        this.uploadPercent = data.progress;
      });
      await task;
      this.url = await getDownloadURL(storageRef);
      this.sendUrlToForm.emit(this.url);
    }
    if (this.uploadPercent === 100) {
      this.addedFile = true;
    }
    return Promise.resolve(this.url);
  }
}
