import { Component, OnInit } from '@angular/core';
//import { TotalCountService } from '../product-page/product-list/service/total-count.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemCount: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartService.getTotalCount().subscribe((count) => {
        this.totalItemCount = count;
      });
  }
}
