import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemModule } from '../item/item.module';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ],
      imports: [ ItemModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    jest.spyOn(component.selectItem, 'emit');
    component.list = [
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit select event on select', () => {
    component.onSelectItem(component.list[0]);
    expect(component.selectItem.emit).toHaveBeenCalledWith(
      component.list[0]
    );
  });
});
