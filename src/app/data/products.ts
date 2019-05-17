import { Product } from '../interfaces/product.interface';

export const Products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'http://lorempixel.com/150/150/technics/1',
    price: 50,
    isOnSale: true,
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'http://lorempixel.com/150/150/technics/4',
    price: 150,
    isOnSale: false,
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'http://lorempixel.com/150/150/technics/3',
    price: 250,
    isOnSale: true,
  }
];