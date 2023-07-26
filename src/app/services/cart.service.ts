import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ShoppingCartItem } from '../cart-page/interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ShoppingCartItem[] = [];
  private totalCountSubject: Subject<number> = new Subject<number>();

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
    this.calculateTotalCount();
  }

  incrementCartItem(index: number) {
    if (this.cartItems[index]) {
      this.cartItems[index].count++;
      console.log(this.cartItems);
    }
    this.calculateTotalCount();
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
    this.calculateTotalCount();
  }

  getItems()
  {
    return this.cartItems;
  }

  calculateTotalCount(): void {
    const totalCount = this.cartItems.reduce((total, item) => total + item.count, 0);
    this.totalCountSubject.next(totalCount);
  }

  getTotalCount(): Observable<number> {
    return this.totalCountSubject.asObservable();
  }
}
