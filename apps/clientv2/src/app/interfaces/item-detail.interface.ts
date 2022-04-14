import { AuthorI, CategoryI, ItemI } from './item.interface';

export interface ItemDetailJSON {
    author: AuthorI;
    item: ItemI;
    categories: CategoryI[];
  }
