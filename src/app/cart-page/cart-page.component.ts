import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ShoppingCartItem } from './interfaces/cart-item.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent  implements OnInit{
  cartItems: ShoppingCartItem[] = [];
  shipping: number = 5;
  totalValue: number = 0;

  constructor(private cartService: CartService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.cartItems = data['cartItems'];
    });
    this.calculateTotalValue();
  }

  calculateTotalValue(): void {
    this.totalValue = this.cartItems.reduce((total, item) => 
    total + item.price * item.count + this.shipping, 0);
  }

  removeItem(index: number){
    this.cartItems.splice(index, 1);
    this.calculateTotalValue();
  }
}
