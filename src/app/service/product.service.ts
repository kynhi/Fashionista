import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProduct, Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = '/api/products';

  constructor(private http: HttpClient) { }

  // Get products
  get() {
      return this.http.get<Array<IProduct>>(this.productsUrl)
  }

  // Create product
  create(product: Product) {
      return this.http.post<IProduct>(this.productsUrl, product)
  }

  // Delete a product
  delete(id: string) {
      return this.http.delete<any>(`${this.productsUrl}/${id}`)
  }

  // Error handling
  private error(error: any) {
      let message = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(message);
  }
}
