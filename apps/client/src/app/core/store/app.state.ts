import { ItemState, ITEM_STATE_NAME } from './item/item.state';

export interface AppState {
  [ITEM_STATE_NAME]?: ItemState
}
