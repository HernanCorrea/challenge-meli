import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/app.state';
import { getItemList } from '../../core/store/item/item.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {

  constructor(private store: Store<AppState>,
              private route: Router) { }

  itemList$ = this.store.select(getItemList);

  onSelect(idItem: string){
    this.route.navigate(['/detail', idItem]);
  }
}
