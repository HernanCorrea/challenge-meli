import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent  {

  @Input() item: any;
  @Output() selectItem = new EventEmitter();

  onSelect(item: any) {
    this.selectItem.emit(item);
  }
}
