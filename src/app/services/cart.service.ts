import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../cart-page/interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ShoppingCartItem[] = [];

  constructor() { }

  addToCart(item: ShoppingCartItem) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.name === item.name && cartItem.hasSugar === item.hasSugar
    );

    if (existingItem) {
      existingItem.count++;
    } else {
      this.cartItems.push(item);
    }
  }

  incrementCartItem(index: number) {
    if (this.cartItems[index]) {
      this.cartItems[index].count++;
      console.log(this.cartItems);
    }
  }

  decrementCartItem(index: number) {
    if(this.cartItems[index]) {
      if (this.cartItems[index].count === 1) {
        this.cartItems.splice(index, 1);
      } else {
        this.cartItems[index].count--;
      }
    }
    console.log(this.cartItems);
  }

  getItems()
  {
    return this.cartItems;
  }
}
