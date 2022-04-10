import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { SeoService } from './core/services/seo.service';
import { AppState } from './core/store/app.state';
import { Observable } from 'rxjs';
import { CategoriesI } from './core/interfaces';
import { getCategories } from './core/store/item/item.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private store: Store<AppState>,
    private seoService: SeoService) { }

  categories$: Observable<CategoriesI[]> = this.store.select(getCategories)

  ngOnInit(): void {
    this.seoService.addTags([
      { name: 'author', content: 'Joris Hermans' },
      { name: 'date', content: '2022-04-06', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8'},
    ]);
  }
}
