import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CoffeeItem } from './interfaces/coffee-item.interface';
import { CoffeeService } from './coffee.service';

@Injectable({
    providedIn: 'root'
  })
  export class CoffeeDataResolver implements Resolve<CoffeeItem[]> {
    constructor(private CoffeeService: CoffeeService) {}
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CoffeeItem[]> {
      return this.CoffeeService.getCoffeeItems();
    }
  }