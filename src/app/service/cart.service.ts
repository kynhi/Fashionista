import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Array<Product> = []
  constructor() { }
}
