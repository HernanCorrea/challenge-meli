import { NgModule } from '@angular/core';
import { SearchFieldModule } from '../../components/search-field/search-field.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [SearchFieldModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
