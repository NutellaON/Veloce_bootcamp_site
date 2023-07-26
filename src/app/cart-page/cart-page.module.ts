import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartResolverService } from '../resolvers/cart-data.resolver';


@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    CartPageRoutingModule
  ],
  providers: [
    CartResolverService
  ]
})
export class CartPageModule { }
