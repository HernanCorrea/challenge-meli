import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, skip, Subject, takeUntil } from 'rxjs';
import { SeoService } from '../../core/services/seo.service';
import { AppState } from '../../core/store/app.state';
import { getItemList } from '../../core/store/item/item.selectors';
import { ItemI } from '../../core/interfaces';
import {
  searchItems,
  setCategories,
  setItemList,
  setItems,
} from '../../core/store/item/item.actions';
import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding value changes
        query(
          ':leave',
          [stagger(100, [animate('0.5s', style({ opacity: 0 }))])],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(100, [animate('0.5s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        group([
          style({
            opacity: 0,
            height: '0',
            padding: '0',
            transform: 'translateY(20px) scale(0.8)',
          }),
          animate(
            '100ms ease-in',
            style({
              height: '*',
              padding: '*',
              transform: 'translateY(0) scale(1)',
            })
          ),
          animate(
            '150ms ease-in',
            style({
              opacity: 1,
            })
          ),
        ]),
      ]),
    ]),
  ],
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
    this.routerListen();
    this.setSeoMetadata();
  }

  routerListen(): void {
    this.act.queryParams
      .pipe(
        skip(1),
        takeUntil(this.destroy$)
      ).subscribe((params) => {
        if (params['search']) {
          this.store.dispatch(searchItems({ query: params['search'] }));
        }
      });
  }

  setSeoMetadata(): void {
    this.seoService.setCanonicalURL();
    this.seoService.setTitle('Listado de productos');
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
    // this.store.dispatch(setItemList({ list: [] }));
    // this.store.dispatch(setCategories({ categories: [] }));
  }
}
