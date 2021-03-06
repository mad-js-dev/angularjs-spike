import { Injectable } from '@angular/core';

//import { Observable, of } from 'rxjs';

import { ProductCategory } from './product-category';
import { Product } from './shared/models/product';
import { PRODUCTS } from './mock-products-category';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class ProductCategoryService {

  ProductData:ProductCategory[] = PRODUCTS;
  
  constructor(private messageService: MessageService) { 
      let db = localStorage.getItem("products-spike");
      
      if(db==null) {
        console.log("Setting demo data");
        localStorage.setItem("products-spike", JSON.stringify(PRODUCTS));
      } else {
        console.log("Data loaded from localstorage");
        this.ProductData = JSON.parse(localStorage.getItem("products-spike"));
      }
  }
 
  getProducts(): ProductCategory[] {
    // TODO: send the message _after_ fetching the products
    //this.messageService.add('ProductService: fetched products');
    this.ProductData = this.ProductData.sort(function(a, b) { 
      return a.id - b.id  ||  a.name.localeCompare(b.name);
    });
    return this.ProductData;
  }
  
  getProduct(id: number | null): ProductCategory {
    // TODO: send the message _after_ fetching the product  
    
    console.log(id);
    if(id!=null) {
        return this.ProductData.find(product => product.id === id); 
    } else {
        return this.addProduct('new product');
    }
  }
  
  addProduct(name: string): ProductCategory {
    //TODO: add push message
    let prod = new ProductCategory();
    var i = 0;
    this.ProductData.find(product => {
        return (i++ == product.id)?false:true;
    }); 
    prod.id = i-1;
    prod.name = name.trim();
    this.ProductData.push(prod);
    
    this.saveData();
    return prod;
  }
  
  addToProductList(id: number):void {
    var itemIndex = this.ProductData.findIndex(i => i.id === id);
    var item = new Product();
    item.name="new item", item.country="asd";
    this.ProductData[itemIndex].products.push({name: "", country: ""})
  }
  
  deleteFromProductList(id: number, position: number):void {
    var itemIndex = this.ProductData.findIndex(i => i.id === id);
    item.name="new item", item.country="asd";
    this.ProductData[itemIndex].products.splice(pos, 1)
  }
  
  setProduct(id: number, name: string): ProductCategory {
    //TODO: add push mesagge
    var itemIndex = this.ProductData.findIndex(i => i.id === id);
    this.ProductData[itemIndex].name = name;
    this.saveData();
    return this.ProductData[itemIndex];
  }
  
  deleteProduct(id: number) {
    var itemIndex = this.ProductData.findIndex(i => i.id === id);
    this.ProductData.splice(itemIndex, 1);
    this.saveData();
  }
  
  saveData():void {
    this.messageService.add(`Products saved`);
    localStorage.setItem("products-spike", JSON.stringify(this.ProductData));
  }
}
