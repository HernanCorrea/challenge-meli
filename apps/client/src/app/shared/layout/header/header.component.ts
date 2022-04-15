import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { AppState } from '../../../core/store/app.state';
import { searchItems } from '../../../core/store/item/item.actions';
import { getLoad } from '../../../core/store/load/load.selectors';

const METHOD_ID = 'getItems';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store<AppState>, private router: Router) {}

  isLoadingSearch$: Observable<boolean> = this.store
    .select(getLoad)
    .pipe(map((load) => load.type === METHOD_ID && load.isLoading));
    // .pipe(map((load) => load.type === METHOD_ID && load.isLoading));

  // isLoadingGeneral$: Observable<boolean> = this.store
  //   .select(getLoad)
  //   .pipe(map((load) => load.isLoading));

  onSearch(search: string): void {
    this.router.navigate(['/items'], { queryParams: { search } });
  }
}
