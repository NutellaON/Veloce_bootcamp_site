import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductPageComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    FormsModule
  ],
  exports: [ProductPageComponent]
})
export class ProductPageModule { }
