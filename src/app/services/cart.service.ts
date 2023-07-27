import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CoffeeInCart } from '../interfaces/cart-details.interface';
import { CartItem } from '../interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private totalCountSubject: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.productId === item.productId && cartItem.sugar === item.sugar && cartItem.size === item.size
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
     this.cartItems.push(item);
    }
    this.calculateTotalCount();
  }

  incrementCartItem(index: number) {
    if (this.cartItems[index]) {
      this.cartItems[index].quantity++;
    }
    this.calculateTotalCount();
  }

  decrementCartItem(index: number) {
    if(this.cartItems[index]) {
      if (this.cartItems[index].quantity === 1) {
        this.cartItems.splice(index, 1);
      } else {
        this.cartItems[index].quantity--;
      }
    }
    this.calculateTotalCount();
  }

  getItems()
  {
    return this.cartItems;
  }

  calculateTotalCount(): void {
    const totalCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.totalCountSubject.next(totalCount);
  }

  getTotalCount(): Observable<number> {
    return this.totalCountSubject.asObservable();
  }
}
