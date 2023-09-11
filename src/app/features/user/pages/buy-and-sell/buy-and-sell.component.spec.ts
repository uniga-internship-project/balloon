import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAndSellComponent } from './buy-and-sell.component';

describe('BuyAndSellComponent', () => {
  let component: BuyAndSellComponent;
  let fixture: ComponentFixture<BuyAndSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyAndSellComponent]
    });
    fixture = TestBed.createComponent(BuyAndSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
