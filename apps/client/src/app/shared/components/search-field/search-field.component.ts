import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent  {

  @Output() searchEvent = new EventEmitter();

  form = new FormGroup({
    search: new FormControl(null, Validators.required)
  });

  onSubmit(formValue: any): void{
    this.searchEvent.emit(formValue.search);
  }

}
