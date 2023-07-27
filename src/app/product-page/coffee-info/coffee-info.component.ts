import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoffeeItem } from '../interfaces/coffee-item.interface';

@Component({
  selector: 'app-coffee-info',
  templateUrl: './coffee-info.component.html',
  styleUrls: ['./coffee-info.component.css']
})
export class CoffeeInfoComponent   {
  @Input() coffee?: CoffeeItem;
  @Input() selectedSize: number = 0;
  showSideView: boolean = false;

  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();

  closeSideView() {
    this.closeClicked.emit();
  }
}


