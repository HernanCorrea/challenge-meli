import { createReducer, on } from '@ngrx/store';
import { setCategories, setDetail, setItemList, setItems } from './item.actions';
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
      detail: action.detail
    };
  }),
  on(setItemList, (state: ItemState, {list}): ItemState => {
    return {
      ...state,
      list
    };
  }),
  on(setCategories, (state: ItemState, {categories}): ItemState => {
    return {
      ...state,
      categories
    };
  }),
);
