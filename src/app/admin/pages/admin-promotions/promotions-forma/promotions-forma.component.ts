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
  IPromoRequest,
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
  promoForm!: FormGroup;

  public addedFile = false;
  public uploadPercent = 0;
  public editStatus = false;
  idPromo = 0;
  urlPromo = '';

  constructor(
    private promoService: PromotionsServiceService,
    private storage: Storage,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initPromoForm();
  }

  initPromoForm(): void {
    this.promoForm = this.fb.group({
      promoTitle: [null],
      promoPath: [null],
      description: [null],
      img: [null],
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
      });
    }
  }

  addPromo() {
    console.log(this.promoForm.value);
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

  loadImage(event: any): void {
    const file = event.target.files[0];
    this.uploadFile('promotions', file.name, file).then((data) => {
      this.promoForm.patchValue({
        img: data,
      });
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
      const storageRef = ref(this.storage, path);
      const task = uploadBytesResumable(storageRef, file);
      percentage(task).subscribe((data) => {
        this.uploadPercent = data.progress;
      });
      await task;
      this.urlPromo = await getDownloadURL(storageRef);
      console.log(this.urlPromo);
    }
    return Promise.resolve(this.urlPromo);
  }

  deleteImg(): void {
    const task = ref(this.storage, this.valueByControl('img'));
    this.uploadPercent = 0;
    deleteObject(task).then(() => {
      this.addedFile = false;
      this.promoForm.patchValue({
        img: null,
      });
    });
  }
  valueByControl(promo: string): string {
    return this.promoForm.get(promo)?.value;
  }
}
