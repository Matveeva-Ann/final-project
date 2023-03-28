import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillCallComponent } from './will-call.component';

describe('WillCallComponent', () => {
  let component: WillCallComponent;
  let fixture: ComponentFixture<WillCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WillCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
