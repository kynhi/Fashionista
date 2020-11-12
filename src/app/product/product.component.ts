import { Component, OnInit } from '@angular/core';
import { IProduct } from '../service/product.model';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'node-express-angular';
  status = 'DOWN';
  createdProduct: IProduct = null;

  constructor(protected statusService: StatusService) { }

  // Get the server status when starting the view.
  ngOnInit() {
    this.statusService
      .getStatus()
      .subscribe((result: any) => {
        this.status = result.status;
      });
  }

  // Get the new product created.
  onCreatedProduct(createdProduct: IProduct) {
    this.createdProduct = createdProduct;
  }

}
