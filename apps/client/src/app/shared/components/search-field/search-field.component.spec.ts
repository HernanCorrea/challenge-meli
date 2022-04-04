import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFieldComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




// // collect all required testing objects for Angular App
// import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// // for Two-Way binding
// import { FormsModule } from '@angular/forms';

// // import component to be tested and its dependencies
// import { Product} from './../app.product.model';
// import { ProductFormComponent } from './app.productform.component';

// // define the test suit
// describe('ProductFormComponent', () => {
//   // dfefine the required objects fot test
//   let component: ProductFormComponent;
//   // defining the Component Fixture to monitor changed in component
//   // e.g. DataBinding changes
//   let fixture: ComponentFixture;
//   // define the HTML element
//   let button: HTMLElement;

//   // define the test env. so that the test will be
//   // using Angular standard modules to execute test on component

//   beforeEach(() => {
//     // defin the TestBedConfiguration
//     TestBed.configureTestingModule({
//       declarations: [ProductFormComponent],
//       imports: [FormsModule]
//     }).compileComponents(); // the component will be compiled
//                             // (includes HTML Tremplate)
//   });
//   // definition for all objects before test starts
//   beforeEach(() => {
//      // initiaze the fixture so that the component 'selector'
//     // and its HTML template will be initialized
//     fixture = TestBed.createComponent(ProductFormComponent);
//     // read the component's instace to execute method in it
//     component = fixture.componentInstance;
//     // detect the first databinding changes
//     fixture.detectChanges();
//   });
//   // the test case
//   it('should calculate tax based on base price when save button is clicked', () => {
//     // define the product instance
//     const product = new Product(0, '', '', '', '', '', 0);
//     console.log(`Conponent instance ${component}`);
//     product.BasePrice = 4000;
//     component.product = product;
//     // receive the nativeElement for HTML Template DOM
//     const element = fixture.nativeElement;
//     // recive the button
//     button = element.querySelector('.btn-success');
//     // define an event
//     // when the button dispatch the click event the
//     // 'save()' method of the component will be called
//     const eventType = button.dispatchEvent(new Event('click'));
//     // detect any changed in HTML DOM against the dispatched event
//     fixture.detectChanges();
//     // asser the value in the disabled text element
//     expect(element.querySelector('input[disabled]').value).toEqual('800');
//   });
// });

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { WeatherComponent } from './weather.component';
// import { WeatherService } from './weather.service';
// import { of } from 'rxjs';

// class MockWeatherService {
//   currentForecast$(): Observable<any> {
//     return of({});
//   }
// }

// describe('WeatherComponent', () => {
//   let component: WeatherComponent;
//   let fixture: ComponentFixture<WeatherComponent>;

//   beforeEach(
//     async(() => {
//       TestBed.configureTestingModule({
//         declarations: [WeatherComponent],
//         providers: [{ provide: WeatherService, useClass: MockWeatherService }],
//         schemas: [NO_ERRORS_SCHEMA],
//       }).compileComponents();
//     }),
//   );

//   beforeEach(() => {
//     fixture = TestBed.createComponent(WeatherComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('formatTemperature', () => {
//     it('formatTemperature: should round 89.3 down and format it', () => {
//       const formattedTemperature = component.formatTemperature(89.3);
//       expect(formattedTemperature).toEqual('89\xB0 F');
//     });

//     it('formatTemperature: should round 89.5 up and format it', () => {
//       const formattedTemperature = component.formatTemperature(89.5);
//       expect(formattedTemperature).toEqual('90\xB0 F');
//     });
//   });

//   describe('weatherIcon', () => {
//     it('should have a default value of "wi wi-day-cloudy"', () => {
//       const defaultIcon = component.weatherIcon('unknown');
//       expect(defaultIcon).toEqual('wi wi-day-cloudy');
//     });
//   });
// });

