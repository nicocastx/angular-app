import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { Product } from '../models/product';
import { FormComponent } from './form/form';

@Component({
  selector: 'app-product',
  imports: [FormComponent],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent implements OnInit {
  products: Product[] = []

  selectedProduct: Product = new Product()

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      this.products = data
    })
  }

  addProductHandler(product: Product) : void {
    //this.products.push(product)
    if (product.id > 0) {
      this.products = this.products.map(prod => {
        if (prod.id === product.id) {
          return { ...product }
        }
        return prod
      })
      return
    }
    this.products = [...this.products, { ...product, id: new Date().getTime() }]
  }

  onUpdateProduct(product: Product) : void{
    this.selectedProduct = product
  }

  onRemoveProduct(product: Product) : void {
    this.products = this.products.filter(prod => prod.id !== product.id)
  }

}
