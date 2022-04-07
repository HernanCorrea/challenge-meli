import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SeoService } from '../../core/services/seo.service';
import { AppState } from '../../core/store/app.state';
import { getItemList } from '../../core/store/item/item.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  constructor(private store: Store<AppState>,
              private route: Router,
              private seoService: SeoService) { }
              
  itemList$ = this.store.select(getItemList);
  
  ngOnInit(): void {
    // this.seoService.setCanonicalURL();
    this.seoService.setTitle('Listado de productos');
    this.seoService.setDescription('Obtener productos de la API de Mercado Libre');
    this.seoService.setKeywords(['Mercadolibre', 'Productos', 'Compras', 'Ventas', 'Stock', 'MercadoPago']);   
  }


  onSelect(idItem: string){
    this.route.navigate(['/detail', idItem]);
  }
}
