import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    jest.spyOn(component.selectItem, 'emit');
    component.item = {
      id: 'MLA932316327',
      title: 'Apple iPhone SE (2da Generación) 64 Gb - Blanco',
      price: {
        currency: 'ARS',
        amount: 137623,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_745945-MLA46552310508_062021-I.jpg',
      condition: 'new',
      location: 'Nueva margarita',
      free_shipping: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit event on click', () => {
    component.onSelect();
    expect(component.selectItem.emit).toHaveBeenCalledWith(component.item);
  });
  it('should be trully on hover', () => {
    component.onHover();
    expect(component.hover).toBeTruthy();
  });
  it('should be Falsy on MouseLeave', () => {
    component.onMouseLeave();
    expect(component.hover).toBeFalsy();
  });

  it('Validate image', () => {
    const { debugElement } = fixture;
    const imgElement = debugElement.query(By.css('.section__thumbnail img'));
    expect(imgElement.attributes['src']).toBe(component.item.picture);
    expect(imgElement.attributes['alt']).toBe(component.item.title);
  });
  it('Validate description', () => {
    const { debugElement } = fixture;
    const descriptionElement = debugElement.query(
      By.css('p.description__item')
    );
    expect(descriptionElement.nativeElement.textContent).toBe(
      component.item.title
    );
  });
  it('Validate price', () => {
    const { debugElement } = fixture;
    const amountElement = debugElement.query(By.css('.price__item'));
    // test currency pipe
    const currencyPipe = new CurrencyPipe('en-US');
    expect(amountElement.nativeElement.textContent.trim()).toBe(
      currencyPipe.transform(component.item.price.amount, undefined, 'symbol-narrow', '1.0-0')
    );
  });

  it('Validate condition', () => {
    const { debugElement } = fixture;
    const statusElement = debugElement.query(By.css('.status__item'));
    expect(statusElement.nativeElement.textContent).toEqual(
      component.item.condition
    );
  });
  it('Validate location', () => {
    const { debugElement } = fixture;
    const locationElement = debugElement.query(By.css('.location__item span'));
    expect(locationElement.nativeElement.textContent).toEqual(
      component.item.location
    );
  });
});
