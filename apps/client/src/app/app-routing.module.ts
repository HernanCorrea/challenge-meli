import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: 'list',
    loadChildren:() => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'detail',
    loadChildren:() => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
