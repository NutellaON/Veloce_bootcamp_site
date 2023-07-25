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

  constructor(private totalCountService: TotalCountService) { }

  addToCart(index: number) {
    this.showAddToCart[index] = !this.showAddToCart[index];
    this.coffeItems[index].count++;
    this.calculateTotalCount();
  }

  incrementCounter(index: number) {
    this.coffeItems[index].count++;
    this.calculateTotalCount();
  }

  decrementCounter(index: number) {

    if (this.coffeItems[index].count == 1) {
      this.showAddToCart[index] = false;
      this.coffeItems[index].count = 0;
    }
    else {
      this.coffeItems[index].count--;
    }
    this.calculateTotalCount();
  }

  private calculateTotalCount(): void {
    const totalCount = this.coffeItems.reduce((total, coffeeItem) => total + coffeeItem.count, 0);
    this.totalCountService.setTotalCount(totalCount);
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
