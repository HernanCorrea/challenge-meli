import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../../../core/store/app.state';
import { getLoad } from '../../../core/store/load/load.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private store: Store<AppState>, private router: Router) {}

  isLoadingSearch$: Observable<boolean> = this.store
    .select(getLoad)
    .pipe(map((load) => load.isLoading));
  // .pipe(map((load) => load.type === METHOD_ID && load.isLoading));

  // isLoadingGeneral$: Observable<boolean> = this.store
  //   .select(getLoad)
  //   .pipe(map((load) => load.isLoading));

  onSearch(search: string): void {
    const action = 'action';
    this.router.navigate(['/items'], { queryParams: { search, action } });
  }
}
