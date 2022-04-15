import { RouterState } from '@ngrx/router-store';
import { ItemState, ITEM_STATE_NAME } from './item/item.state';
import { LoadState, LOAD_STATE_NAME } from './load/load.state';

export interface AppState {
  [ITEM_STATE_NAME]: ItemState, 
  [LOAD_STATE_NAME]: LoadState, 
  router: RouterState
}
