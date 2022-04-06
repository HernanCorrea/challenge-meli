import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemResolver } from './core/resolvers/item.resolver';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'items' },
  {
    path: 'items',
    component: ListComponent,
    // loadChildren:() => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'items/:id',
    resolve: {
      isLoading: ItemResolver
    },
    component: DetailComponent
    // loadChildren:() => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
