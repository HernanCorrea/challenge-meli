import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SeoService } from './core/services/seo.service';
import { AppState } from './core/store/app.state';
import { map, Observable } from 'rxjs';
import { getCategories } from './core/store/item/item.selectors';
import { CategoryI } from './core/interfaces';
import { getLoad } from './core/store/load/load.selectors';
import { fadeSlideInOut } from './shared/animations/enter-leave.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeSlideInOut],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private seoService: SeoService) {}

  categories$: Observable<CategoryI[]> = this.store.select(getCategories);

  isLoading$: Observable<boolean> = this.store
    .select(getLoad)
    .pipe(map((load) => load.isLoading));

  ngOnInit(): void {
    this.seoService.addTags([
      { name: 'author', content: 'Joris Hermans' },
      { name: 'date', content: '2022-04-06', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
}
