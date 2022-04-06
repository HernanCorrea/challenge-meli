import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFieldComponent } from './search-field.component';


@NgModule({
  declarations: [SearchFieldComponent],
  imports: [
    ReactiveFormsModule,
  ],
  exports: [SearchFieldComponent]
})
export class SearchFieldModule {}
