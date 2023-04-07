import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiNavigationComponent } from './sushi-navigation.component';

describe('SushiNavigationComponent', () => {
  let component: SushiNavigationComponent;
  let fixture: ComponentFixture<SushiNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
