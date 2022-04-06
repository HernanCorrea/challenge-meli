import { AuthorI, ItemI } from "../../interfaces";

export const ITEM_STATE_NAME = 'item';

export interface ItemState {
  list: ItemI[],
  searchQuery: string | null,
  detail: ItemI | null,
  author: AuthorI | null,
  categories: string[],
}

export const initialStateItem: ItemState = {
  list: [],
  searchQuery: null,
  author: null,
  detail: null,
  categories: []
};

