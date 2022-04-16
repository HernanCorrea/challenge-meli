import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { initialStateItem } from '../store/item/item.state';

import { DetailResolver } from './detail.resolver';

describe('DetailResolver', () => {
  let resolver: DetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TransferState,
        provideMockStore({
          initialState: {
            item: initialStateItem,
          },
        }),
      ],
    });
    resolver = TestBed.inject(DetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
