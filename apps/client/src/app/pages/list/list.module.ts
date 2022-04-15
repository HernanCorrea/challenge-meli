import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemModule } from '../../shared/components/item/item.module';
import { NoDataModule } from '../../shared/components/no-data/no-data.module';
import { ListComponent } from './list.component';

const routes: Routes = [{ path: '', component: ListComponent }];
@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ItemModule,
    NoDataModule,
  ],
})
export class ListModule {}
