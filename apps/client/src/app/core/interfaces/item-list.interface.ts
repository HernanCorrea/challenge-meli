import { AuthorI } from './author.interface';
import {  CategoryI, ItemI } from './item.interface';

export interface ItemListJSON {
  author: AuthorI | null;
  categories: CategoryI[];
  items: ItemI[];
}

