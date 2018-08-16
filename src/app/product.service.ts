import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private let ProductData:Product[] = PRODUCTS;
  
  constructor(private messageService: MessageService) { 
      let db = localStorage.getItem("products-spike");
      
      if(db==null) {
        console.log("Setting demo data");
        localStorage.setItem("products-spike", JSON.stringify(PRODUCTS));
      } else {
        console.log("Data loaded from localstorage");
        this.productData = JSON.parse(localStorage.getItem("products-spike"));
      }
  }
 
  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the products
    this.messageService.add('ProductService: fetched products');
    return of(this.ProductData);
  }
  
  getProduct(id: number): Observable<Product> {
    // TODO: send the message _after_ fetching the product
    this.messageService.add(`ProductService: fetched product id=${id}`);
    return of(this.ProductData.find(product => product.id === id));
  }
  
  addProduct(name: string): Observable<Product> {
    //TODO: add push mesagge
    this.ProductData.push(name.trim());
    //this.SaveData();
  }
  
  setProduct(id: number, name: string): Observable<Product> {
    //TODO: add push mesagge
    var itemIndex = this.ProductData.findIndex(i => i.id === id);
    this.ProductData[itemIndex].value = name;
    //this.SaveData();
  }
}
