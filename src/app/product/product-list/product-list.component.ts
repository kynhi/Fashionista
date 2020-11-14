import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from 'src/app/service/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  products: Array<IProduct> = [];
  @Input() productToDisplay: IProduct = null;

  constructor(protected productService: ProductService) { }

  // Load all the products when starting the view.
  ngOnInit(): void {
    this.loadAll();
  }

  // If new product created, we add it to the list.
  ngOnChanges(): void {
    if (this.productToDisplay !== null) {
      this.products.push(this.productToDisplay);
    }
  }

  // Delete a product. 
  delete(id: string) {
    this.productService.delete(id).subscribe((result: any) => this.loadAll());
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
