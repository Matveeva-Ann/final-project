import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsInfoComponent } from './promotions-info.component';

describe('PromotionsInfoComponent', () => {
  let component: PromotionsInfoComponent;
  let fixture: ComponentFixture<PromotionsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
