import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page.component';
import { CoffeeDataResolver } from '../../resolvers/coffee-data.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent,
    resolve: {
      CoffeeItem: CoffeeDataResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }