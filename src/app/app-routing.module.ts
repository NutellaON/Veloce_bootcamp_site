import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product-page/product-page/product-page.module').then(m => m.ProductPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart-page/cart-page.module').then(m => m.CartPageModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
