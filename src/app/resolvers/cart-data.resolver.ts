import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CartItem } from '../interfaces/cart-item.interface';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartResolverService implements Resolve<CartItem[]> {
    constructor(private cartService: CartService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CartItem[]> {
        return of(this.cartService.getCartItems());
    }
}