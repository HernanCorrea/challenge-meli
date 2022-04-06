import { createReducer, on } from '@ngrx/store';
import { setDetail, setItems } from './item.actions';
import { initialStateItem, ItemState } from './item.state';

export const ItemReducer = createReducer(
  initialStateItem,
  on(setItems, (state: ItemState, action): ItemState => {
    return {
      ...state,
      list: action.items,
      categories: action.categories,
      author: action.author
    };
  }),
  on(setDetail, (state: ItemState, action): ItemState => {
    return {
      ...state,
      detail: action.detail,
    };
  }),
);
