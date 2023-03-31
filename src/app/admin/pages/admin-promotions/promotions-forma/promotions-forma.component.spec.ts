import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsFormaComponent } from './promotions-forma.component';

describe('PromotionsFormaComponent', () => {
  let component: PromotionsFormaComponent;
  let fixture: ComponentFixture<PromotionsFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsFormaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
