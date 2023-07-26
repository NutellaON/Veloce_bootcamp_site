import { Component, Input, OnInit  } from '@angular/core';
import { CoffeeItem } from '../interfaces/coffee-item.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() coffeItems: CoffeeItem[] = [];
  @Input() selectedSize: number[] = [];
  showAddToCart: boolean[] = [];
  selectedCoffee?: CoffeeItem;
  counter: number[]=[];
  hasSugar: boolean[] = [];

  constructor(
    private cartService: CartService) {}

  ngOnInit() {
    this.hasSugar = this.coffeItems.map(() => false);
    this.counter = this.coffeItems.map(() => 0);
  }

  addToCart(index: number) {
    console.log(this.hasSugar);
    this.counter[index] = 1;
    this.showAddToCart[index] = !this.showAddToCart[index];

    const productToAdd = {
      name: this.coffeItems[index].name,
      image: this.coffeItems[index].image,
      price: this.selectedSize[index] === 250 ? this.coffeItems[index].price['250'] : this.coffeItems[index].price['500'],
      size: this.selectedSize[index],
      hasSugar: this.hasSugar[index],
      count: this.counter[index]
    };

    this.cartService.addToCart(productToAdd);
  }

  incrementCounter(index: number) {
    this.counter[index]++;
    this.cartService.incrementCartItem(index);
  }

  decrementCounter(index: number) {

    this.cartService.decrementCartItem(index);
    if (this.counter[index] == 1) {
      this.showAddToCart[index] = false;
      this.counter[index] = 0;
    }
    else {
      this.counter[index]--;
    }
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
