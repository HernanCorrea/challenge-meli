import { RouterState } from '@ngrx/router-store';
import { ItemState, ITEM_STATE_NAME } from './item/item.state';

export interface AppState {
  [ITEM_STATE_NAME]: ItemState, 
  router: RouterState
}
