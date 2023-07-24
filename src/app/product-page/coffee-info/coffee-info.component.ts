import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coffee-info',
  templateUrl: './coffee-info.component.html',
  styleUrls: ['./coffee-info.component.css']
})
export class CoffeeInfoComponent   {
  @Input() coffee: any;
  showSideView: boolean = false;

  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();

  closeSideView() {
    this.closeClicked.emit();
  }
}


