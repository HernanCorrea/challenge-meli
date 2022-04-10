import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemI } from '../../core/interfaces';
import { SeoService } from '../../core/services/seo.service';
import { AppState } from '../../core/store/app.state';
import {
  getItem,
  setCategories,
  setDetail,
} from '../../core/store/item/item.actions';
import { getItemDetail } from '../../core/store/item/item.selectors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private seoService: SeoService, private store: Store<AppState>) {}

  item$: Observable<ItemI | null> = this.store.select(getItemDetail);

  ngOnInit(): void {
    this.setSeoMetadata();
  }

  setSeoMetadata(): void {
    this.seoService.setCanonicalURL();
    this.seoService.setTitle('Detalle de producto');
    this.seoService.setDescription(
      'Obtener productos de la API de Mercado Libre'
    );
    this.seoService.setKeywords([
      'Mercadolibre',
      'Productos',
      'Compras',
      'Ventas',
      'Stock',
      'MercadoPago',
    ]);
  }

  // ngOnDestroy() {
  //   // this.store.dispatch(setCategories({ categories: [] }));
  //   // this.store.dispatch(setDetail({ detail: null }));

  // }
}
