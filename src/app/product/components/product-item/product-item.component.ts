import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductQuantityChange } from '../../interfaces/product-quantity-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  @Input() public product: Product;
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();

  constructor() { }

  addToCart() {
    this.quantityChange.emit({ product: this.product, changeInQuantity: 1 });
  }

  removeFromCart() {
    if (this.product.quantityInCart > 0) {
      this.quantityChange.emit({ product: this.product, changeInQuantity: -1 });
    }
  }
}