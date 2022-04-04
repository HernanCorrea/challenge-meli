import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

const routes: Routes = [
  { path: '', component: DetailComponent },
];
@NgModule({
  declarations: [DetailComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [DetailComponent]
})
export class DetailModule {}
