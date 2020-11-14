import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from '../service/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Array<Product> =[]
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.cartProducts
  }
  removeProduct(removeProduct:Product){
    console.log(this.cartProducts)
    this.cartService.cartProducts = this.cartProducts.filter(product=> product._id != removeProduct._id);
    this.cartProducts = this.cartService.cartProducts
    console.log(this.cartProducts)
  }
}
