import { AuthorI } from './author.interface';
import { CategoryI, ItemI } from './item.interface';

export interface ItemDetailJSON {
    author: AuthorI;
    item: ItemI;
    categories: CategoryI[];
  }
