import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMagnifierPreviewComponent } from './image-magnifier-preview.component';

describe('ImageMagnifierPreviewComponent', () => {
  let component: ImageMagnifierPreviewComponent;
  let fixture: ComponentFixture<ImageMagnifierPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageMagnifierPreviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMagnifierPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
