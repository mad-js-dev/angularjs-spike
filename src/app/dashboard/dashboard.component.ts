import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../product-category';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  products: ProductCategory[] = [];

  constructor(private productService: ProductCategoryService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    //this.productService.getProducts()
    //  .subscribe(products => this.products = products.slice(1, 5));
  }
}