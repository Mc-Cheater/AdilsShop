import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredListProductComponent } from './filtered-list-product.component';

describe('FilteredListProductComponent', () => {
  let component: FilteredListProductComponent;
  let fixture: ComponentFixture<FilteredListProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredListProductComponent]
    });
    fixture = TestBed.createComponent(FilteredListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
