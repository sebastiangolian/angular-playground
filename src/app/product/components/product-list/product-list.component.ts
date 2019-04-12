import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductQuantityChange } from '../../interfaces/product-quantity-change';
import { Products } from '../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  public products: Array<Product> = Products;

  constructor() { }

  onQuantityChange(change: ProductQuantityChange) {
    const product = this.products.find(prod => {
      return change.product.id === prod.id;
    });
    product.quantityInCart += change.changeInQuantity;
  }

}
