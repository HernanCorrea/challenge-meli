import { AuthorI, CategoriesI, ItemI } from '../../interfaces';

export const ITEM_STATE_NAME = 'item';

export interface ItemState {
  list: ItemI[] | null,
  searchQuery: string | null,
  detail: ItemI | null,
  author: AuthorI | null,
  categories: CategoriesI[],
}

export const initialStateItem: ItemState = {
  list: [],
  searchQuery: null,
  author: null,
  detail: null,
  categories: []
};

