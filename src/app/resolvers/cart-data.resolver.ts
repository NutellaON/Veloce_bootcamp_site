import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ShoppingCartItem } from '../cart-page/interfaces/cart-item.interface';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartResolverService implements Resolve<ShoppingCartItem[]> {
    constructor(private cartService: CartService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShoppingCartItem[]> {
        return of(this.cartService.getItems());
    }
}