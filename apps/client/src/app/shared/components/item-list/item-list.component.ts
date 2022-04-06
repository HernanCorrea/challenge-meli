import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent  {


  @Output() selectItem = new EventEmitter();

  @Input() list: any[] = [];

  onSelectItem(item: any) {
    this.selectItem.emit(item);
  }

}
