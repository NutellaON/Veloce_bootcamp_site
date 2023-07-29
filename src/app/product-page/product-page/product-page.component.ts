import { Component, OnInit } from '@angular/core';
import { CoffeeItem } from '../../interfaces/coffee-item.interface';
import { CoffeeService } from 'src/app/services/coffee.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  coffeeItems: CoffeeItem[] = [];
  totalCount: number = 0;
  selectedSize: number[] = [];

  constructor(
    private coffeeService: CoffeeService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.coffeeItems = data['CoffeeItem'];
      this.selectedSize = this.coffeeItems.map(() => 250);
    });
  }

  onTotalCounterChanged(totalCount: number) {
    this.totalCount = totalCount;
  }
}
