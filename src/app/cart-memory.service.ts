import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartMemoryService {
  products:Product[]=[];
  pquantity:Map<Product,number>=new Map();
  constructor() { }
  push(p:Product){
    this.products.push(p);
    this.pquantity.set(p,1);
  }
  remove(p:Product){
    this.products=this.products.filter(pro=>{return p.id!==pro.id});
    this.pquantity.delete(p);
  }
}
