import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;
  let debugElement: DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFieldComponent ],
      imports: [FormsModule, ReactiveFormsModule, NoopAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    jest.spyOn(component.searchEvent, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should disable button on field empty', () => {
  //   expect(component.form.valid).toBeFalsy();
  //   const isDisabled = Object.prototype.hasOwnProperty.call(searchButton.attributes, 'disabled');
  //   expect(isDisabled).toBeTruthy();
  // });
  
  it('should enable button on set value to field ', () => {
    component.form.controls['search'].setValue('test');
    expect(component.form.valid).toBeTruthy();
  });
  
  it('should disabled button view', () => {
    const { debugElement } = fixture;
    const buttonElement = debugElement.query(By.css('button.search__button'));
    expect(buttonElement.attributes['disabled']).toBeDefined();
  });

  it('should enabled button view', () => {
    const { debugElement } = fixture;
    component.form.controls['search'].setValue('test');
    fixture.detectChanges();
    const buttonElement = debugElement.query(By.css('button.search__button'));
    expect(buttonElement.attributes['disabled']).toBeUndefined();
  });
  it('should emit event on click button', () => {
    component.form.controls['search'].setValue('test');
    fixture.detectChanges();
    const buttonElement = debugElement.query(By.css('button.search__button'));
    buttonElement.nativeElement.click();
    expect(component.searchEvent.emit).toHaveBeenLastCalledWith('test');
  });

  it('should show loading icon on loading true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const loadingElement = debugElement.query(By.css('#loading_icon'));
    expect(loadingElement).toBeDefined();
  });
  it('should hide loading icon on loading true', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const searchElement = debugElement.query(By.css('#search_icon'));
    expect(searchElement).toBeDefined();
  });
});

