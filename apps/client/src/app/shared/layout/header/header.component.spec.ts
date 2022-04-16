import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFieldModule } from '../../components/search-field/search-field.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { searchItems } from '../../../core/store/item/item.actions';
import { initialStateItem } from '../../../core/store/item/item.state';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../../app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  // let store: MockStore;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        SearchFieldModule,
        RouterTestingModule.withRoutes(routes),
        NoopAnimationsModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            item: initialStateItem,
          },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch search action on onSearch event ', () => {
    const spy = jest.spyOn(router, 'navigate');
    // fixture.detectChanges();
    component.onSearch('test');
    component.onSearch('test 2');
    component.onSearch('test 24');

    // expect(spy).toHaveBeenCalledWith(action);
    expect(spy).toHaveBeenCalledTimes(3);
  });

});
