import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFieldModule } from '../../components/search-field/search-field.module';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { searchItems } from '../../../core/store/item/item.actions';
import { initialStateItem } from '../../../core/store/item/item.state';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ 
        SearchFieldModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            item: initialStateItem
          }
        })
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should dispatch search action on onSearch event ', () => {
    const spy = jest.spyOn(store, 'dispatch');
    const action = searchItems({query: 'test'});
    // fixture.detectChanges();
    component.onSearch('test');
    component.onSearch('test 2');
    component.onSearch('test 24');

    expect(spy).toHaveBeenCalledWith(action);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
