import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductCategory } from '../product-category';
import { ProductCategoryService }  from '../product-category.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: ProductCategory;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductCategoryService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct():void {
    const id = this.route.snapshot.paramMap.get('id');
    var intId = Number(id);
    if(id===null) {
        this.product = this.productService.getProduct(null);
    }else{
        var prod = this.productService.getProduct(intId);
        console.log(prod);
        this.product = prod;
    }
    
    
  }
  
  addToProductList():void {
    this.productService.addToProductList(this.product.id);
  }
  
  deleteProduct():void {
    this.productService.deleteProduct(this.product.id);
    this.goBack();
  }
  
  save(): void {
    this.productService.setProduct(this.product.id, this.product.name);
    this.goBack();
  }
  
  goBack(): void {
    this.location.back();
  }
}
 