import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CoffeeItem } from '../interfaces/coffee-item.interface';
import { CoffeeInCart } from '../interfaces/cart-details.interface';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private apiUrl = 'app/products.json';

  constructor(private http: HttpClient) { }

  getCoffeeItems(): Observable<CoffeeItem[]> {
    return this.http.get<CoffeeItem[]>(this.apiUrl);
  }

  getProductById(productId: string): Observable<CoffeeItem | undefined> {
    return this.http.get<CoffeeItem[]>(this.apiUrl).pipe(
      map((coffeeItems: CoffeeItem[]) => coffeeItems.find(item => item.id === productId))
    );
  }
}
