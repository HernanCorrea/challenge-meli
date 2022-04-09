import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListModule } from '../../shared/components/item-list/item-list.module';
import { ItemModule } from '../../shared/components/item/item.module';
import { ListComponent } from './list.component';

const routes: Routes = [
  { path: '', component: ListComponent},
];
@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes),
    ItemListModule,
    ItemModule
  ],
})
export class ListModule {}
