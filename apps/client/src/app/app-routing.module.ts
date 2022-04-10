import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailResolver } from './core/resolvers/detail.resolver';
import { ListResolver } from './core/resolvers/list.resolver';
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
    resolve: { 
      isList: ListResolver
    }
  },
  {
    path: 'items/:id',
    loadChildren:() => import('./pages/detail/detail.module').then(m => m.DetailModule),
    resolve: { 
      isDetail: DetailResolver
    }
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', enableTracing: false, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
