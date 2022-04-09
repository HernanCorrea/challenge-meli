import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SeoService } from '../../core/services/seo.service';
import { AppState } from '../../core/store/app.state';
import { getItem } from '../../core/store/item/item.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private seoService: SeoService,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getItem());
    this.setSeoMetadata();
  }

  setSeoMetadata(): void {
    this.seoService.setCanonicalURL();
    this.seoService.setTitle('Detalle de producto');
    this.seoService.setDescription('Obtener productos de la API de Mercado Libre');
    this.seoService.setKeywords(['Mercadolibre', 'Productos', 'Compras', 'Ventas', 'Stock', 'MercadoPago']);
  }

}
