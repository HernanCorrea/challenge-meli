import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { ItemDetailJSON } from '../interfaces';
import { ItemService } from '../services/item.service';
import { AppState } from '../store/app.state';
import { setDetail } from '../store/item/item.actions';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<boolean> {
  constructor(private itemService: ItemService, private store: Store<AppState>) { }
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.itemService.getItemById(route.params['id'])
      .pipe(
        map((detail: any) => {
          this.store.dispatch(setDetail({detail}));
          return true;
        }),
        catchError((err) => {
          console.warn(err.message);
          return of(false);
        })
      );
  }
}
