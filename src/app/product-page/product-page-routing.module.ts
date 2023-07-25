import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page.component';
import { CoffeeDataResolver } from './coffee-data.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent,
    resolve: {
      CoffeeItem: CoffeeDataResolver // Resolve coffeeItems before loading the component
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }