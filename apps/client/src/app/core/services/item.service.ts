import { HttpContext, HttpContextToken, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { METHOD_ID, setMethodId } from '../interceptors/loading.interceptor';
import { ItemListJSON, ItemDetailJSON } from '../interfaces';
import { ApiService } from './api.service';
import { TransferHttpService } from './transfer-http.service';


@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private transferHttp: TransferHttpService) {}

  /**
   * Search Items Products
   * @param query 
   * @returns 
   */
  getItems(query: string = ''): Observable<HttpEvent<ItemListJSON>> {
    return this.transferHttp.get(`items?q=${query}`, {
      context: setMethodId('getItems'),
    });
  }

  /**
   * Get item by id
   * @param id 
   * @returns 
   */
  getItemById(id: string): Observable<HttpEvent<ItemDetailJSON>> {
    return this.transferHttp.get(`items/${id}`, {
      context: setMethodId('getItemById'),
    });
  }
}
