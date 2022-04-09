import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ItemI } from '../../../core/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent  {

  @Input() item!: ItemI;
  @Output() selectItem = new EventEmitter();

  @HostListener('click', ['$event.target'])
  onSelect() {
    this.selectItem.emit(this.item);
  }

  trackByFn(item: ItemI){
    return item.id;
  }
}
