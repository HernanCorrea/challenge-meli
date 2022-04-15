import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageMagnifierPreviewComponent } from './image-magnifier-preview/image-magnifier-preview.component';
import { ImageMagnifierComponent } from './image-magnifier.component';


@NgModule({
  declarations: [ImageMagnifierComponent, ImageMagnifierPreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageMagnifierComponent, ImageMagnifierPreviewComponent]
})
export class ImageMagnifierModule {}
