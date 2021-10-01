import { Product } from './products';

interface CartItem {
  prod: Product;
  quantity: number;
}

export const cart: CartItem[] = [];
