import { Component, Input, OnInit  } from '@angular/core';
import { CoffeeItem } from '../interfaces/coffee-item.interface';
import { CartService } from 'src/app/services/cart.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, }),
        animate('1s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s ease-in-out' , style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ProductListComponent implements OnInit {
  @Input() coffeItems: CoffeeItem[] = [];
  @Input() selectedSize: number[] = [];
  showAddToCart: boolean[] = [];
  selectedCoffee?: CoffeeItem;
  counter: number[]=[];
  hasSugar: boolean[] = [];
  currentSize: number=0;
  open: boolean=false;

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

  showCoffeeInfo(coffee: CoffeeItem, index: number) {
    this.selectedCoffee = coffee;
    this.currentSize = this.selectedSize[index];
    this.open=true;
  }

  closeCoffeeInfo() {
    this.selectedCoffee = undefined;
  }
}
