import { Component, Input,  } from '@angular/core';
import { TotalCountService } from './service/total-count.service';
import { CoffeeItem } from '../interfaces/coffee-item.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() coffeItems: CoffeeItem[] = [];
  @Input() selectedSize: number[] = [];
  totalCount:number = 0;
  showAddToCart: boolean[] = [];
  selectedCoffee?: CoffeeItem;
  counter: number[]=[];

  constructor(private totalCountService: TotalCountService) {
    this.counter = this.coffeItems.map(() => 0);
  }

  addToCart(index: number) {
    this.counter[index] = 1;
    this.showAddToCart[index] = !this.showAddToCart[index];
    this.calculateTotalCount();
  }

  incrementCounter(index: number) {
    this.counter[index]++;
    this.calculateTotalCount();
  }

  decrementCounter(index: number) {

    if (this.counter[index] == 1) {
      this.showAddToCart[index] = false;
      this.counter[index] = 0;
    }
    else {
      this.counter[index]--;
    }
    this.calculateTotalCount();
  }

  private calculateTotalCount(): void {
    this.totalCount = this.counter.reduce((total, count) => total + count, 0);
    this.totalCountService.setTotalCount(this.totalCount);
  }

  readCoffe() {
    console.log(this.coffeItems);
  }

  showCoffeeInfo(coffee: any) {
    this.selectedCoffee = coffee;
  }

  closeCoffeeInfo() {
    this.selectedCoffee = undefined;
  }
}
