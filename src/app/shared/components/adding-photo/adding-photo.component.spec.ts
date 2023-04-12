import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingPhotoComponent } from './adding-photo.component';

describe('AddingPhotoComponent', () => {
  let component: AddingPhotoComponent;
  let fixture: ComponentFixture<AddingPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
