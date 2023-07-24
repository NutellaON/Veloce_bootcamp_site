import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  coffeeArray: any[] = [
    { name: "Extra Late", image: "assets/Coffe_Latte.png", alt: "Coffe Latte", price: 8.99, size: 250, hasSugar: true, count: 0 },
    { name: "Cappuccino", image: "assets/Cappuccino.png", alt: "Cappuccino", price: 9.99, size: 250, hasSugar: false, count: 0 },
    { name: "Moccachino", image: "assets/Moccachino.png", alt: "Moccachino", price: 7.29, size: 250, hasSugar: false, count: 0 },
  ];

  totalCount: number = 0;

  onTotalCounterChanged(totalCount: number) {
    this.totalCount = totalCount;
  }
}
