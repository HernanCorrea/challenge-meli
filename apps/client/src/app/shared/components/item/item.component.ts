import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ItemI } from '../../../core/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input() item!: ItemI;
  @Output() selectItem = new EventEmitter();
  hover = false;

  @HostListener('click', ['$event.target'])
  onSelect() {
    this.selectItem.emit(this.item);
  }

  @HostListener('mouseover')
  onHover() {
    if (!this.hover) this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }

  trackByFn(item: ItemI) {
    return item.id;
  }
}
