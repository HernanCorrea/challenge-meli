import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, of } from 'rxjs';
import { ItemService } from '../services/item.service';
import { AppState } from '../store/app.state';
import { setItems } from '../store/item/item.actions';

@Injectable({
  providedIn: 'root',
})
export class ListResolver implements Resolve<boolean> {
  constructor(
    private store: Store<AppState>,
    private itemService: ItemService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.itemService.getItems(route.queryParams['search']).pipe(
      map((items: any) => {
        this.store.dispatch(setItems({ items }));
        return true;
      }),
      catchError((error) => {
        console.warn('error', error.message);
        return of(false);
      })
    );
  }
}
