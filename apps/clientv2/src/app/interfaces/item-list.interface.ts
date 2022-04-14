import { AuthorI, CategoryI, ItemI } from './item.interface';

export interface ItemListJSON {
  author: AuthorI | null;
  categories: CategoryI[];
  items: ItemI[];
}

