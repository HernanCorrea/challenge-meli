import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MagnifierEventI } from './image-magnifier.interfaces';

@Component({
  selector: 'app-image-magnifier',
  templateUrl: './image-magnifier.component.html',
  styleUrls: ['./image-magnifier.component.scss'],
})
export class ImageMagnifierComponent {
  @ViewChild('lensRef', { static: true }) lensRef!: ElementRef;

  @Input() src = '';
  @Input() width = 'auto';
  @Input() height = 'auto';
  @Input() lensWidth = 100;
  @Input() lensHeight = 100;

  @Output() eventCallBack = new EventEmitter<MagnifierEventI>();
  @Output() isHover = new EventEmitter<boolean>();

  showMagnifier = false;
  x = 0;
  y = 0;

  mouseMove(e: MouseEvent): void {
    // update cursor position
    const elem = e.target as any;
    const { top, left, width, height } = elem.getBoundingClientRect();

    // calculate cursor position on the image
    const xPosition = e.pageX - left - window.pageXOffset;
    const yPosition = e.pageY - top - window.pageYOffset;

    // calculate cursor position on the lens
    const lensElem = this.lensRef.nativeElement as any;
    let x = xPosition - lensElem.offsetWidth / 2;
    let y = yPosition - lensElem.offsetHeight / 2;
    if (x > elem.width - lensElem.offsetWidth) {
      x = elem.width - lensElem.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > elem.height - lensElem.offsetHeight) {
      y = elem.height - lensElem.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }

    this.x = x;
    this.y = y;

    this.eventCallBack.emit({
      width,
      height,
      x,
      y,
      lensWidth: lensElem.offsetWidth,
      lensHeight: lensElem.offsetHeight,
      src: this.src,
    });
  }

  showHideMagnifier(status: boolean): void {
    this.showMagnifier = status;
    this.isHover.emit(status);
  }
}
