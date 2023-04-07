import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDeliverySushiComponent } from './info-delivery-sushi.component';

describe('InfoDeliverySushiComponent', () => {
  let component: InfoDeliverySushiComponent;
  let fixture: ComponentFixture<InfoDeliverySushiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDeliverySushiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDeliverySushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
