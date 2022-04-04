import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';

const routes: Routes = [
  { path: '', component: ListComponent},
];
@NgModule({
  declarations: [ListComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ListComponent]
})
export class ListModule {}
