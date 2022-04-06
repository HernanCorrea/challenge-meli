import { AuthorI, CategoriesI, ItemI } from './item.interface';

export interface ItemListJSON {
  author: AuthorI;
  categories: CategoriesI;
  items: ItemI[];
}

