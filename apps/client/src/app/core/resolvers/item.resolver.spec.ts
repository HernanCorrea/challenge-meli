import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialStateItem } from '../store/item/item.state';

import { ItemResolver } from './item.resolver';

describe('ItemResolver', () => {
  let resolver: ItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            item: initialStateItem
          }
        })
      ]
    });
    resolver = TestBed.inject(ItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
