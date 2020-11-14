import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Array<Product>
  constructor() { }

  ngOnInit(): void {
  }

}
