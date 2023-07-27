import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../interfaces/cart-item.interface';
import { ActivatedRoute } from '@angular/router';
import { CoffeeInCart } from '../interfaces/cart-details.interface';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent  implements OnInit{
  cartItems: CoffeeInCart[] = [];
  shipping: number = 5;
  totalValue: number = 0;

  constructor(private cartService: CartService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.cartItems = data['cartItems'];
    });
    this.calculateTotalValue();
  }

  calculateTotalValue(): void {
    this.totalValue = this.cartItems.reduce((total, item) => 
    total + item.price * item.quantity + this.shipping, 0);
  }

  removeItem(index: number){
    this.cartItems.splice(index, 1);
    this.calculateTotalValue();
    this.cartService.calculateTotalCount();
  }

  incrementCount(index: number){
    this.cartService.incrementCartItem(index);
    this.calculateTotalValue();
  }

  decrementCount(index: number) {
    this.cartService.decrementCartItem(index);
    this.calculateTotalValue();
  }
}
