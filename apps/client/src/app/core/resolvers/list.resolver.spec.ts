import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { initialStateItem } from '../store/item/item.state';

import { ListResolver } from './list.resolver';

describe('ListResolver', () => {
  let resolver: ListResolver;

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
    resolver = TestBed.inject(ListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
