import { Component, OnInit } from '@angular/core

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  selectedProduct: Product;
  
  products = Product[];
  
  constructor(private productService:ProductService) { }


  ngOnInit() {
    this.getProducts();
  }
  /*
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  
  getProducts(): void {
    this.roductService.getProducts()
        .subscribe(products => this.products = products);
  }*/
}