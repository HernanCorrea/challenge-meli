import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemListJSON, ItemDetailJSON } from '../interfaces';
import { ApiService } from './api.service';
import { TransferHttpService } from './transfer-http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private transferHttp: TransferHttpService) { }

  getItems(query: string = ''): Observable<HttpEvent<ItemListJSON>> {
    return this.transferHttp.get(`items?q=${query}`);
  }
  
  getItemById(id: string): Observable<HttpEvent<ItemDetailJSON>> {
    return this.transferHttp.get(`items/${id}`);
  }
}
