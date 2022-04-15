import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private dom: Document
  ) {}

  setTitle(titlePart: string): void {
    this.title.setTitle(titlePart);
  }

  setDescription(description: string): void {
    this.meta.updateTag(
      { name: 'description', content: description },
      'name=description'
    );
  }

  setKeywords(keywords: string[]): void {
    this.meta.updateTag(
      {
        name: 'keywords',
        content: keywords.reduce((prev, curr) => (prev += `, ${curr}`)),
      },
      'name=keywords'
    );
  }

  addTags(tags: MetaDefinition[]): void {
    this.meta.addTags(tags);
  }

  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }
}
