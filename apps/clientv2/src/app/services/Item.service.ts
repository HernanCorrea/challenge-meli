import { environment } from '../../environments/environment';
import { ItemDetailJSON, ItemListJSON } from '../interfaces';
import { HttpRequestI } from './HttpRequest.service';

class ItemService {
  getItemsPath = `${environment.apiUrl}/items`;
  httpService: HttpRequestI;
  constructor(httpService: HttpRequestI) {
    this.httpService = httpService;
  }

  getItems(query: string): Promise<ItemListJSON> {
    const url = `${this.getItemsPath}?q=${query}`;
    return this.httpService.get(url);
  }

  getItemById(id: string): Promise<ItemDetailJSON> {
    const url = `${this.getItemsPath}/${id}`;
    return this.httpService.get(url);
  }
}

export default ItemService;
