import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeInfoComponent } from './coffee-info.component';

describe('CoffeeInfoComponent', () => {
  let component: CoffeeInfoComponent;
  let fixture: ComponentFixture<CoffeeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeInfoComponent]
    });
    fixture = TestBed.createComponent(CoffeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
