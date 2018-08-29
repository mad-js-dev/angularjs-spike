import { Injectable } from '@angular/core';

//import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  ProductData:Product[] = PRODUCTS;
  
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
 
  getProducts(): Product[] {
    // TODO: send the message _after_ fetching the products
    //this.messageService.add('ProductService: fetched products');
    this.ProductData = this.ProductData.sort(function(a, b) { 
      return a.id - b.id  ||  a.name.localeCompare(b.name);
    });
    return this.ProductData;
  }
  
  getProduct(id: number | null): Product {
    // TODO: send the message _after_ fetching the product  
    
    console.log(id);
    if(id!=null) {
        return this.ProductData.find(product => product.id === id); 
    } else {
        return this.addProduct('new product');
    }
  }
  
  addProduct(name: string): Product {
    //TODO: add push message
    let prod = new Product();
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
  
  setProduct(id: number, name: string): Product {
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
