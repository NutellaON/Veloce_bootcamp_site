import { Component, Input, OnInit  } from '@angular/core';
import { CoffeeItem } from '../../interfaces/coffee-item.interface';
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

  constructor(
    private cartService: CartService) {}

  ngOnInit() {
    this.hasSugar = this.coffeItems.map(() => false);
  }

  addToCart(index: number) {
    this.counter[index] = +1;
    this.showAddToCart[index] = !this.showAddToCart[index]; 

     const productToAdd = {
      productId: this.coffeItems[index].id,
      size: this.selectedSize[index].toString(),
      sugar: this.hasSugar[index],
      quantity: this.counter[index]
    };


    this.cartService.fetchProductDetails(productToAdd);
  }

  showCoffeeInfo(coffee: CoffeeItem, index: number) {
    this.selectedCoffee = coffee;
    this.currentSize = this.selectedSize[index];
  }

  closeCoffeeInfo() {
    this.selectedCoffee = undefined;
  }
}
