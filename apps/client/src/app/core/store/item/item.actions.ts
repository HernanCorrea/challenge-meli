import { createAction, props } from '@ngrx/store';
import { CategoriesI, ItemI, ItemListJSON } from '../../interfaces';

// TODO: SEARCH ITEMS
export const SEARCH_ITEMS = '[ITEM] Search items';
export const searchItems = createAction(
    SEARCH_ITEMS,
  props<{
    query?: string;
  }>()
);

export const SET_ITEMS_API = '[ITEM] Set items API';
export const setItems = createAction(
  SET_ITEMS_API,
  props<{
    items: ItemListJSON
  }>()
);

export const SET_ITEMS_LIST = '[ITEM] Set items List';
export const setItemList = createAction(
  SET_ITEMS_LIST,
  props<{
    list: ItemI[] | null
  }>()
);

export const SET_CATEGORIES = '[ITEM] Set categories';
  export const setCategories = createAction(
  SET_CATEGORIES,
  props<{
    categories: CategoriesI[]
  }>()
);

// TODO: SEARCH BY ID
export const GET_ITEM = '[ITEM] GET item by id';
export const getItem = createAction(
  GET_ITEM,
);
export const SET_DETAIL = '[ITEM] Set detail';
export const setDetail = createAction(
  SET_DETAIL,
  props<{
    detail: ItemI | null;
  }>()
);

