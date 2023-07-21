import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  coffeeArray: any[] = [
    { name: "Extra Late", image: "assets/Coffe_Latte.png", alt: "Coffe Latte", price: 8.99 },
    { name: "Cappuccino", image: "assets/Cappuccino.png", alt: "Cappuccino", price: 9.99 },
    { name: "Moccachino", image: "assets/Moccachino.png", alt: "Moccachino", price: 7.29 },
  ];
}
