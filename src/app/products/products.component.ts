import { Component, OnInit } from '@angular/core';

import { ProductCategory } from '../product-category';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  
  productCategories : ProductCategory[];
  
  constructor(private productService: ProductCategoryService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productCategories = this.productService.getProducts();
    console.log(this.productCategories)
  }
  
  
}