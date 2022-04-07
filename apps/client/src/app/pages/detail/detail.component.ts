import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.setCanonicalURL();
    this.seoService.setTitle('Detalle de producto');
    this.seoService.setDescription('Obtener productos de la API de Mercado Libre');
    this.seoService.setKeywords(['Mercadolibre', 'Productos', 'Compras', 'Ventas', 'Stock', 'MercadoPago']);
  }

}
