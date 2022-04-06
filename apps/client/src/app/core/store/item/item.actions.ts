import { createAction, props } from '@ngrx/store';
import { AuthorI, CategoriesI, ItemI } from '../../interfaces';

// TODO: SEARCH ITEMS
export const SEARCH_ITEMS = '[FORM] Search items';
export const searchItems = createAction(
    SEARCH_ITEMS,
  props<{
    query: string;
  }>()
);

export const SET_ITEMS_API = '[FORM] Set items API';
export const setItems = createAction(
  SET_ITEMS_API,
  props<{
    items: ItemI[],
    categories: CategoriesI,
    author: AuthorI
  }>()
);

// TODO: SEARCH BY ID
export const SET_DETAIL = '[FORM] Set detail';
export const setDetail = createAction(
  SET_DETAIL,
  props<{
    detail: ItemI;
  }>()
);

