import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    jest.spyOn(component.selectItem, 'emit');
    component.item = {
      id: "MLA932316327",
      title: "Apple iPhone SE (2da Generación) 64 Gb - Blanco",
      price: {
          currency: "ARS",
          amount: 137623,
          decimals: 0
      },
      picture: "http://http2.mlstatic.com/D_745945-MLA46552310508_062021-I.jpg",
      condition: "new",
      free_shipping: true
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit event on click', () => {
    component.onSelect();
    expect(component.selectItem.emit).toHaveBeenCalledWith(
      component.item
    );
  });
});
