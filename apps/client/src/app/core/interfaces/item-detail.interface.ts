import { AuthorI, CategoriesI, ItemI } from './item.interface';

export interface ItemDetailJSON {
    author: AuthorI;
    item: ItemI;
    categories: CategoriesI[];
  }
