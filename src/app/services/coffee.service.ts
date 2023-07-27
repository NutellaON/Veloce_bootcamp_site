import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoffeeItem } from '../interfaces/coffee-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private apiUrl = 'app/products.json';

  constructor(private http: HttpClient) { }

  getCoffeeItems(): Observable<CoffeeItem[]> {
    return this.http.get<CoffeeItem[]>(this.apiUrl);
  }
}
