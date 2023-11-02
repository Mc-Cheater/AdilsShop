import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBannerComponent } from './cart-banner.component';

describe('CartBannerComponent', () => {
  let component: CartBannerComponent;
  let fixture: ComponentFixture<CartBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartBannerComponent]
    });
    fixture = TestBed.createComponent(CartBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
