import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { AppState } from '../../../core/store/app.state';
import { URL_SEARCH_ITEMS } from '../../../core/store/item/item.actions';
import { getLoad } from '../../../core/store/load/load.selectors';
import { getCurrentRoute } from '../../../core/store/router/router.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private store: Store<AppState>, private router: Router) {}

  isLoading$: Observable<boolean> = this.store
    .select(getLoad)
    .pipe(map((load) => load.isLoading));

  getRouteQueryParams$ = this.store
    .select(getCurrentRoute)
    .pipe(map((route) => route.queryParams));

  isLoadingSearch$: Observable<boolean> = combineLatest([
    this.isLoading$,
    this.getRouteQueryParams$,
  ]).pipe(
    map(
      ([isLoading, queryParams]) =>
        isLoading && queryParams['action'] === URL_SEARCH_ITEMS
    )
  );

  onSearch(search: string): void {
    const action = URL_SEARCH_ITEMS;
    this.router.navigate(['/items'], { queryParams: { search, action } });
  }
}
