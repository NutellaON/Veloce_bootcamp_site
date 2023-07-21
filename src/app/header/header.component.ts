import { Component, OnInit } from '@angular/core';
import { TotalCountService } from '../product-page/product-list/service/total-count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  totalItemCount: number = 0;

  constructor(private totalCountService: TotalCountService) {}

  ngOnInit() {
    
    // Subscribe to changes in the total count
    this.totalCountService.getTotalCount().subscribe((count) => {
      this.totalItemCount = count;
    });
  }
}
