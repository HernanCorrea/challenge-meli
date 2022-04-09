import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    component: HomeComponent
  },
  {
    path: 'items',
    loadChildren:() => import('./pages/list/list.module').then(m => m.ListModule),
  },
  {
    path: 'items/:id',
    // component: DetailComponent
    loadChildren:() => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', enableTracing: false, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
