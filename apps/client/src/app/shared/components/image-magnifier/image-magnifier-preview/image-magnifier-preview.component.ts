import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { MagnifierEventI } from '../image-magnifier.interfaces';

@Component({
  selector: 'app-image-magnifier-preview',
  templateUrl: './image-magnifier-preview.component.html',
  styleUrls: ['./image-magnifier-preview.component.scss'],
})
export class ImageMagnifierPreviewComponent {
  @ViewChild('magnifierPreview', { static: true })
  magnifierPreview!: ElementRef;

  @Input() set imageMagnifier(magnifier: MagnifierEventI | null) {
    if (!magnifier) return;
    const ref = this.magnifierPreview.nativeElement;
    const result = ref.getBoundingClientRect();
    // /*calculate the ratio between result DIV and lens:*/
    const cx = result.width / magnifier.lensWidth;
    const cy = result.height / magnifier.lensHeight;

    // /*set background properties for the result DIV:*/
    ref.style.backgroundImage = `url(${magnifier.src})`;
    ref.style.backgroundSize =
      magnifier.width * cx + 'px ' + magnifier.height * cy + 'px';
    ref.style.backgroundPosition = `-${magnifier.x * cx}px -${
      magnifier.y * cy
    }px`;
  }
}
