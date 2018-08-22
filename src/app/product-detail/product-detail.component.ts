import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product }         from '../product';
import { ProductService }  from '../product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
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
 