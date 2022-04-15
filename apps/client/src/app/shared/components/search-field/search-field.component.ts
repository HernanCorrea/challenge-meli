import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormSearchI } from './search-field.interface';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent  {
  @Input() isLoading = false;
  @Output() searchEvent = new EventEmitter();

  form = new FormGroup({
    search: new FormControl(null, Validators.required)
  });

  onSubmit(formValue: FormSearchI): void{
    this.searchEvent.emit(formValue.search);
  }

}
