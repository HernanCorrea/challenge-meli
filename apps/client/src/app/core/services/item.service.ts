import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemListJSON, ItemDetailJSON } from '../interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private apiService: ApiService) { }

  getItems(query: string = ''): Observable<HttpEvent<ItemListJSON>> {
    return this.apiService.get<ItemListJSON>(`items?q=${query}`);
  }
  
  getItemById(id: string): Observable<HttpEvent<ItemDetailJSON>> {
    return this.apiService.get<ItemDetailJSON>(`items/${id}`);
  }
}
