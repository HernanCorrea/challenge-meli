import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, skip, Subject, takeUntil, tap } from 'rxjs';
import { SeoService } from '../../core/services/seo.service';
import { AppState } from '../../core/store/app.state';
import { getItemList } from '../../core/store/item/item.selectors';
import { ItemI } from '../../core/interfaces';
import { searchItems } from '../../core/store/item/item.actions';
import { fadeInOut } from '../../shared/animations/enter-leave.animation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private act: ActivatedRoute,
    private seoService: SeoService
  ) {}

  itemList$: Observable<ItemI[]> = this.store.select(getItemList);
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.setSeoMetadata();
    this.routerListen();
  }

  routerListen(): void {
    this.act.queryParams
      .pipe(
        tap((params) => {
          this.seoService.setTitle(`${params['search']} - Mercado Libre`);
        }),
        skip(1),
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        if (params['search']) {
          this.store.dispatch(searchItems({ query: params['search'] }));
        }
      });
  }

  setSeoMetadata(): void {
    this.seoService.setCanonicalURL();
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

  onSelect(item: ItemI): void {
    this.router.navigate(['/items', item.id]);
  }

  trackByFn(index: number, item: ItemI) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
