import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductListComponent } from '.././product-list/product-list.component';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { FormsModule } from '@angular/forms';
import { CoffeeInfoComponent } from '.././coffee-info/coffee-info.component';

@NgModule({
  declarations: [ProductPageComponent, ProductListComponent, CoffeeInfoComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    FormsModule
  ],
  exports: [ProductPageComponent]
})
export class ProductPageModule { }
