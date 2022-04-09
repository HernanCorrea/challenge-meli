import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState, ITEM_STATE_NAME } from './item.state';

const selectFormState = createFeatureSelector<ItemState>(ITEM_STATE_NAME);

export const getItemList = createSelector(
  selectFormState,
  (item: ItemState) => item.list || []
);

export const getCategories = createSelector(
  selectFormState,
  (item: ItemState) => item.categories
);

export const getAuthor = createSelector(
  selectFormState,
  (item: ItemState) => item.author
);

export const getItemDetail = createSelector(
  selectFormState,
  (item: ItemState) => item.detail
);

export const getSearchQuery = createSelector(
  selectFormState,
  (item: ItemState) => item.searchQuery
);
