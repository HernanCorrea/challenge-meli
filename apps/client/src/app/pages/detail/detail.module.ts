import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageMagnifierModule } from '../../shared/components/image-magnifier/image-magnifier.module';
import { DetailComponent } from './detail.component';

const routes: Routes = [{ path: '', component: DetailComponent }];
@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ImageMagnifierModule],
  exports: [DetailComponent],
})
export class DetailModule {}
