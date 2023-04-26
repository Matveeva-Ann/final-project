import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  deleteObject,
  getDownloadURL,
  percentage,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IPromoResponse,
} from 'src/app/shared/interface/promotionsInterface/promotions-interface';
import { PromotionsServiceService } from 'src/app/shared/services/promotionsService/promotions-service.service';

@Component({
  selector: 'app-promotions-forma',
  templateUrl: './promotions-forma.component.html',
  styleUrls: ['./promotions-forma.component.scss'],
})
export class PromotionsFormaComponent {
  @Output() toggleWindow = new EventEmitter<void>();
  @Input() sendPromo?: IPromoResponse;
  public promoForm!: FormGroup;

  public addedFile = false;
  public uploadPercent = 0;
  public uploadPercentIMGForHome = 0;
  public editStatus = false;
  private idPromo = 0;
  public urlPromo = '';
  public urlPromoHome = '';

  constructor(
    private promoService: PromotionsServiceService,
    private storage: Storage,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initPromoForm();
  }
 
  private initPromoForm(): void {
    this.promoForm = this.fb.group({
      promoTitle: [null, Validators.required],
      promoPath: [null, Validators.required],
      categoryPath: 'action',
      description: [null, Validators.required],
      img: [null, Validators.required],
      imgForHome: [null, Validators.required],
      date: [null],
    });
    if (this.sendPromo) {
      this.editStatus = true;
      this.addedFile = true;
      this.idPromo = this.sendPromo.id;
      this.promoForm.patchValue({
        promoTitle: this.sendPromo.promoTitle,
        promoPath: this.sendPromo.promoPath,
        description: this.sendPromo.description,
        img: this.sendPromo.img,
        imgForHome: this.sendPromo.imgForHome,
      });
    }
  }

  public addPromo() {
    this.promoForm.value.date = new Date();
    if (this.sendPromo) {
      this.promoService
        .updatePromo(this.promoForm.value, this.idPromo)
        .subscribe();
    } else {
      this.promoService.addPromo(this.promoForm.value).subscribe();
    }
    this.promoForm.reset();
    this.toggleWindow.emit();
    this.sendPromo = undefined;
    this.editStatus = false;
  }

  public loadImage(event: any): void {
    const file = event.target.files[0];
    this.uploadFile('promotions', file.name, file).then((data) => {
      this.promoForm.patchValue({
        img: data,
      });
      if (this.urlPromo !== '' && this.urlPromoHome !== '') {
        this.addedFile = true;
      }
    });
  }

  loadImageForHome(event: any): void {
    const file = event.target.files[0];
    this.uploadFileImgHome('promotionsImgForHome', file.name, file).then(
      (data) => {
        this.promoForm.patchValue({
          imgForHome: data,
        });
        if (this.urlPromo !== '' && this.urlPromoHome !== '') {
          this.addedFile = true;
        }
      }
    );
  }

  async uploadFileImgHome(
    folder: string,
    name: string,
    file: File | null
  ): Promise<string> {
    const path = `${folder}/${name}`;
    if (file) {
      const storageRef = ref(this.storage, path);
      const task = uploadBytesResumable(storageRef, file);
      percentage(task).subscribe((data) => {
        this.uploadPercentIMGForHome = data.progress;
      });
      await task;
      this.urlPromoHome = await getDownloadURL(storageRef);
      if (this.uploadPercent===100 && this.uploadPercentIMGForHome === 100){
         this.addedFile = true;
      }
      if (this.sendPromo) {
        this.sendPromo.img = this.urlPromoHome;
      }
    }
    return Promise.resolve(this.urlPromoHome);
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
      this.urlPromo = await getDownloadURL(storageRef);
      if (this.uploadPercent===100 && this.uploadPercentIMGForHome === 100){
        this.addedFile = true;
     }
      if (this.sendPromo) {
        this.sendPromo.img = this.urlPromo;
      }
    }
    return Promise.resolve(this.urlPromo);
  }

  public deleteImg(passedValue: string): void {
    const task = ref(this.storage, this.valueByControl(passedValue));
    this.uploadPercent = 0;
    deleteObject(task).then(() => {
      this.addedFile = false;
      if (passedValue === 'img') {
        this.uploadPercent = 0;
        this.uploadPercentIMGForHome = 100;
        this.promoForm.patchValue({
          img: null,
        });
      } else {
        this.uploadPercent = 100;
        this.uploadPercentIMGForHome = 0;
        this.promoForm.patchValue({
          imgForHome: null,
        });
      }
    });
  }

  private valueByControl(promo: string): string {
    return this.promoForm.get(promo)?.value;
  }
}
