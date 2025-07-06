import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';



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

  private url: string = 'http://localhost:8080/products'

  constructor(private httpClient: HttpClient) { }

  /*findAll() : Observable<Product[]> {
    //return of(this.products)
    return
  }
    */
  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url).pipe(
      map((response: any) => response._embedded.products as Product[]),
      //podria agregar mas operadores, como filter, etc.
    )
  }

  create(product: Product) : Observable<Product>{
    return this.httpClient.post<Product>(this.url, product)
  }

  update(product: Product) : Observable<Product>{
    return this.httpClient.put<Product>(`${this.url}/${product.id}`, product)
  }

  delete(product: Product) : Observable<void>{
    return this.httpClient.delete<void>(`${this.url}/${product.id}`)
  }

}
