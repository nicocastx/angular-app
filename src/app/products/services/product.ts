import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 30 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 40 },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 50 }
  ]

  constructor() { }

  findAll() : Observable<Product[]> {
    return of(this.products)
  }
}
