import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchFieldModule } from '../../components/search-field/search-field.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SearchFieldModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
