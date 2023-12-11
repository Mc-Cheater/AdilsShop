import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardFComponent } from './product-card-f.component';

describe('ProductCardFComponent', () => {
  let component: ProductCardFComponent;
  let fixture: ComponentFixture<ProductCardFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardFComponent]
    });
    fixture = TestBed.createComponent(ProductCardFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
