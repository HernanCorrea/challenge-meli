import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/app.state';
import { setCategories } from '../../core/store/item/item.actions';

@Component({
  selector: 'app-home',
  template: ''
})
export class HomeComponent  {
  constructor(private store: Store<AppState>){
    this.store.dispatch(setCategories({ categories: [] }));
  }
}
