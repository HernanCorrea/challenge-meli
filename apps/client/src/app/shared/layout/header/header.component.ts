import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { searchItems } from '../../../core/store/item/item.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store<AppState>, 
              private router: Router) { }

  onSearch(search: string): void {
    console.log({search});
    if (this.router.url.includes('items?')){
      this.store.dispatch(searchItems({query: search}));
    }
    this.router.navigate(['/items'], { queryParams: { search } });
  }

}
