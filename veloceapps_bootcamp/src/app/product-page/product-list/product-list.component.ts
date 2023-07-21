import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TotalCountService } from './service/total-count.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() coffeItems: any[] = [];
  @Output() totalCounter: EventEmitter<number> = new EventEmitter();
  totalCount:number = 0;
  showAddToCart: boolean[] = [];

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
    // Calculate the total count from the coffeItems array
    // This can be done based on your data structure
    
    const totalCount = this.coffeItems.reduce((total, coffeeItem) => total + coffeeItem.count, 0);
    this.totalCountService.setTotalCount(totalCount);
  }
  //button.style.display = "none";
  // const button = event.target as HTMLElement;
  // const productItem = button.closest('.product-item');

  // const addText = productItem.querySelector("#addToCartButton");
  // addText.style.display = "none";

  // const cartCounter = document.getElementById("counterCart");
  // cartCounter.style.display = "flex";

  // const counterWrapper = productItem.querySelector(".counter-wrapper");
  // counterWrapper.style.display = "flex";

  // const cartImage = document.getElementById("cartImage");
  // cartImage.setAttribute("src", "assets/Shopping_Cart(item).svg");

  // this.updateTotalCounter(); // Call a method in your component to update the total counter

}
