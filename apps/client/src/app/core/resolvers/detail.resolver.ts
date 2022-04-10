import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, of } from 'rxjs';
import { ItemService } from '../services/item.service';
import { AppState } from '../store/app.state';
import { setCategories, setDetail } from '../store/item/item.actions';
import { getItemDetail } from '../store/item/item.selectors';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<boolean> {

  constructor(private store: Store<AppState>, 
              private itemService: ItemService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.itemService.getItemById(route.params['id']).pipe(
          map((response: any) => {
            this.store.dispatch(
              setCategories({ categories: response.categories })
            );
            this.store.dispatch(
              setDetail({ detail: response.item })
            );
            return true;
          }),
          catchError((error) => {
            console.warn('error', error.message);
            return of(error);
          })
        );
  }
}
