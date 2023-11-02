import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProductCardComponent } from './mini-product-card.component';

describe('MiniProductCardComponent', () => {
  let component: MiniProductCardComponent;
  let fixture: ComponentFixture<MiniProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniProductCardComponent]
    });
    fixture = TestBed.createComponent(MiniProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
