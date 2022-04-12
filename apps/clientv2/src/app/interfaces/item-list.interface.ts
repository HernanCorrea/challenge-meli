import { AuthorI, CategoriesI, ItemI } from './item.interface';

export interface ItemListJSON {
  author: AuthorI | null;
  categories: CategoriesI;
  items: ItemI[];
}

