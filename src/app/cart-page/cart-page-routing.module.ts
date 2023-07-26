import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page.component';
import { CartResolverService } from '../resolvers/cart-data.resolver';

const routes: Routes = [
    {
      path: '',
      component: CartPageComponent,
      resolve: {
        cartItems: CartResolverService
      }
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CartPageRoutingModule { }