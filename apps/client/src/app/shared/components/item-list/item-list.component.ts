import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { ItemI } from '../../../core/interfaces';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent  {

  @ContentChildren(ItemComponent) itemListTemplate!: QueryList<ItemComponent>;

  @Input() list: ItemI[] | null = [];

}
