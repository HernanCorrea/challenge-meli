import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ItemI } from '../../core/interfaces';
import { SeoService } from '../../core/services/seo.service';
import { AppState } from '../../core/store/app.state';
import { getItemDetail } from '../../core/store/item/item.selectors';
import { MagnifierEventI } from '../../shared/components/image-magnifier/image-magnifier.interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  constructor(private seoService: SeoService, private store: Store<AppState>) {}

  item$: Observable<ItemI | null> = this.store.select(getItemDetail).pipe(
    tap((item) => {
      this.setSeoMetadata(item);
    })
  );
  isHoverImage$ = new BehaviorSubject<boolean>(false);
  imageMagnifier: MagnifierEventI | null = null;

  setSeoMetadata(item: ItemI | null): void {
    if (!item) return;
    
    this.seoService.setCanonicalURL();
    this.seoService.setTitle(item.title.substring(0, 60));
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

  isHoverImageEvent(isHover: boolean): void {
    this.isHoverImage$.next(isHover);
  }

  eventCallBack(imageMagnifier: MagnifierEventI): void {
    this.imageMagnifier = imageMagnifier;
  }
}
