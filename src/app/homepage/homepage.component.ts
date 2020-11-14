import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { IProduct, Product } from '../service/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products: Array<IProduct> = [];
  category = 'Men Wear'

  constructor(protected productService: ProductService, private cartService: CartService) { }

  // Load all the products when starting the view.
  ngOnInit(): void {
    this.loadAll();
  }

  // If new product created, we add it to the list.
  ngOnChanges(): void {
    // if (this.productToDisplay !== null) {
    //   this.products.push(this.productToDisplay);
    // }
  }

  addToCart(product:Product){
    this.cartService.cartProducts.push(product)
  }

  categoryClick(event,newCategory){
    this.category =newCategory;
    console.log(this.category)
  }
  // Load all products.
  private loadAll() {
    this.productService
      .get()
      .subscribe((result: Array<IProduct>) => {
        this.products = result;
        console.log(this.products)
      });
  }
}
