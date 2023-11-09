import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartMemoryService {
  products:Product[]=[];
  constructor() { }
  push(p:Product){
    this.products.push(p);
  }
  remove(p:Product){
    this.products=this.products.filter(pro=>{return p.id!==pro.id});
  }
}
