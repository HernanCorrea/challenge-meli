import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { searchItems } from '../../../core/store/item/item.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store<AppState>) { }

  onSearch(searchValue: string): void {
    this.store.dispatch(searchItems({query: searchValue}));
  }

}
