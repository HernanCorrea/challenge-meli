import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;
  let debugElement: DebugElement;
  let searchButton: DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFieldComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    jest.spyOn(component.searchEvent, 'emit');
    fixture.detectChanges();
    searchButton = debugElement.query(By.css('button.search__button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button on field empty', () => {
    expect(component.form.valid).toBeFalsy();
    const isDisabled = Object.prototype.hasOwnProperty.call(searchButton.attributes, 'disabled');
    expect(isDisabled).toBeTruthy();
  });
  
  it('should enable button on set value to field ', () => {
    component.form.controls['search'].setValue('test');
    expect(component.form.valid).toBeTruthy();
    
    const isDisabled = Object.prototype.hasOwnProperty.call(searchButton.attributes, 'disabled');
    expect(isDisabled).toBeTruthy();

  });
  
  it('should emit event on click button', () => {
    component.form.controls['search'].setValue('test');
    fixture.detectChanges();
    searchButton.nativeElement.click();
    expect(component.searchEvent.emit).toHaveBeenLastCalledWith('test');
  });
});

