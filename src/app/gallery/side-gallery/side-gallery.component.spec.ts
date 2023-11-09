import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideGalleryComponent } from './side-gallery.component';

describe('SideGalleryComponent', () => {
  let component: SideGalleryComponent;
  let fixture: ComponentFixture<SideGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideGalleryComponent]
    });
    fixture = TestBed.createComponent(SideGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
