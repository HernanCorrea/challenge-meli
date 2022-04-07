import { Component, OnInit } from '@angular/core';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'client';

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    // { name: 'robots', content: 'noindex, nofollow' },
    // { name: 'googlebot', content: 'noindex, nofollow' },
    this.seoService.addTags([
      { name: 'author', content: 'Joris Hermans' },
      { name: 'date', content: '2022-04-06', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8'},
    ]);
  }
}
