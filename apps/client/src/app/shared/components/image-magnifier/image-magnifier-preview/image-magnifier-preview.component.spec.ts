import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MagnifierEventI } from '../image-magnifier.interfaces';

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

  it('should backgroundImage, backgroundSize, backgroundPosition be correct', () => {
    const magnifier: MagnifierEventI = {
      width: 500,
      height: 285,
      x: 298.34375,
      y: 58.21875,
      lensWidth: 150,
      lensHeight: 170,
      src: 'https://http2.mlstatic.com/D_728643-MLA48073247674_102021-O.jpg',
    };
    component.imageMagnifier = magnifier;
    fixture.detectChanges();
    const { debugElement } = fixture;
    const liElements = debugElement.query(By.css('div'));
    console.log(liElements.attributes);
    expect(liElements.nativeElement.style.backgroundImage).toBe(`url(${magnifier.src})`);
    expect(liElements.nativeElement.style.backgroundSize).toBe('0px 0px');
    expect(liElements.nativeElement.style.backgroundPosition).toBe('-0px -0px');
  });
});
