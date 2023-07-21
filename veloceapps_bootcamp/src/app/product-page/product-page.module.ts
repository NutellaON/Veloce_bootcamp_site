import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductPageComponent, ProductListComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductPageComponent]
})
export class ProductPageModule { }
