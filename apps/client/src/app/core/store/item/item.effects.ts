import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { ItemService } from '../../services/item.service';
import { AppState } from '../app.state';
import { getCurrentRoute } from '../router/router.selector';
import {
  getItem,
  searchItems,
  setCategories,
  setDetail,
  setItems,
} from './item.actions';

@Injectable()
export class ItemEffects {
  constructor(
    private actions$: Actions,
    private itemService: ItemService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  searchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchItems),
      withLatestFrom(this.store.select(getCurrentRoute)),
      mergeMap(([action, currentRoute]) => {
        const search = action?.query ?? currentRoute.queryParams['search'];
        return this.itemService.getItems(search).pipe(
          map((items: any) => {
            return setItems({ items });
          }),
          catchError((error) => {
            console.warn('error', error.message);
            return of(error);
          })
        );
      })
    )
  );

  getItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getItem),
      withLatestFrom(this.store.select(getCurrentRoute)),
      mergeMap(([, currentRoute]) => {
        const {
          params: { id },
        } = currentRoute;
        return this.itemService.getItemById(id).pipe(
          map((response: any) => {
            this.store.dispatch(
              setCategories({ categories: response.categories })
            );
            return setDetail({ detail: response.item });
          }),
          catchError((error) => {
            console.warn('error', error.message);
            return of(error);
          })
        );
      })
    )
  );
}
