import { Product } from '../interfaces/product';

export const Products: Product[] = [
    {
      id: 1,
      name: 'Test Product - 1',
      imageUrl: 'http://lorempixel.com/150/150/technics/1',
      price: 50,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 2,
      name: 'Test Product - 2',
      imageUrl: 'http://lorempixel.com/150/150/technics/4',
      price: 150,
      isOnSale: false,
      quantityInCart: 0
    },
    {
      id: 3,
      name: 'Test Product - 3',
      imageUrl: 'http://lorempixel.com/150/150/technics/3',
      price: 250,
      isOnSale: true,
      quantityInCart: 0
    }
  ];