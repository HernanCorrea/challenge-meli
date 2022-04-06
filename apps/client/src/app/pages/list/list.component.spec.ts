import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { initialStateItem } from '../../core/store/item/item.state';
import { ItemListComponent } from '../../shared/components/item-list/item-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ListComponent } from './list.component';
import { routes } from '../../app-routing.module';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let roter: Router;
  const list = [
    {
      id: "MLA906842945",
      title: "Apple iPhone SE (2da Generación) 128 Gb - Negro",
      price: {
          currency: "ARS",
          amount: 145444,
          decimals: 0
      },
      picture: "http://http2.mlstatic.com/D_615774-MLA46552695388_062021-I.jpg",
      condition: "new",
      free_shippin: true,
      location: "Capital Federal"
    },
    {
        id: "MLA932316327",
        title: "Apple iPhone SE (2da Generación) 64 Gb - Blanco",
        price: {
            currency: "ARS",
            amount: 137623,
            decimals: 0
        },
        picture: "http://http2.mlstatic.com/D_745945-MLA46552310508_062021-I.jpg",
        condition: "new",
        free_shippin: true,
        location: "Capital Federal"
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent, ItemListComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        provideMockStore({
          initialState: {
            item: {
              ...initialStateItem,
              list
            }
          }
        })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    roter = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should itemList be equal', (done) => {
    component.itemList$.subscribe(componentList => {
      expect(componentList).toEqual(list);
      done();
    });
  });
  it('should navigate to detail page', () => {
    const spy = jest.spyOn(roter, 'navigate');
    component.onSelect('test');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
