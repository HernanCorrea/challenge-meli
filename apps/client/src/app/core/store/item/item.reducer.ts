import { createReducer, on } from '@ngrx/store';
import { setDetail, setItems } from './item.actions';
import { initialStateItem, ItemState } from './item.state';

export const ItemReducer = createReducer(
  initialStateItem,
  on(setItems, (state: ItemState, {items: {items, categories, author}}): ItemState => {
    return {
      ...state,
      list: items,
      categories,
      author
    };
  }),
  on(setDetail, (state: ItemState, action): ItemState => {
    return {
      ...state,
      detail: action.detail,
    };
  }),
);
