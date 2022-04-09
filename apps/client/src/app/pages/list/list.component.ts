import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, debounceTime, map, mergeMap, Observable, of, tap } from 'rxjs';
import { SeoService } from '../../core/services/seo.service';
import { AppState } from '../../core/store/app.state';
import { getItemList } from '../../core/store/item/item.selectors';
import { ItemI } from '../../core/interfaces';
import { ItemService } from '../../core/services/item.service';
import { searchItems, setItems } from '../../core/store/item/item.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit{

  constructor(private store: Store<AppState>,
              private act: ActivatedRoute,
              private router: Router,
              private seoService: SeoService,
              private itemService: ItemService) { }
              
  // itemList$: Observable<ItemI[]> = this.store.select(getItemList);
  itemList$: Observable<ItemI[]> = this.store.select(getItemList);
  
  ngOnInit(): void {
    this.store.dispatch(searchItems({}));
    this.setSeoMetadata();
  }

  setSeoMetadata(): void {
    this.seoService.setCanonicalURL();
    this.seoService.setTitle('Listado de productos');
    this.seoService.setDescription('Obtener productos de la API de Mercado Libre');
    this.seoService.setKeywords(['Mercadolibre', 'Productos', 'Compras', 'Ventas', 'Stock', 'MercadoPago']);   
  }


  onSelect(item: ItemI): void {
    this.router.navigate(['/items', item.id]);
  }

  trackByFn(index: number, item: ItemI){
    return item.id;
  }
}
