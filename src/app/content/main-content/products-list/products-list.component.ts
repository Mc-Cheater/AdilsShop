import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductFetcherService } from 'src/app/product-fetcher.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
showPage(_t5: number) {


  this.currentProductsShown=this.productsPages.get(_t5);
}
  products= this.fetcher.filteredProducts;
  pagesKeys:number[];


  productPerPageModel=6;


  pages=((Math.floor(this.products.length/this.productPerPageModel)===this.products.length/this.productPerPageModel)?0:1) +Math.floor(this.products.length/this.productPerPageModel);
  productsPages:Map<number,Product[]>=new Map();
  currentProductsShown:Product[]|undefined;
  
  constructor(private fetcher:ProductFetcherService){
    
    for(let i=0;i<this.pages;i++){
    this.productsPages.set(i,this.products.slice(i*this.productPerPageModel,Math.min(this.products.length,(i+1)*this.productPerPageModel)))  
    console.log(i);
    console.log(this.productsPages.get(i));
    console.log(this.pages);
    this.currentProductsShown=this.productsPages.get(0);
  }
  this.pagesKeys=Array.from(this.productsPages.keys());
  }
  set productPerPage(ppp:number){
    this.productPerPageModel=(ppp>2)?ppp:3;
    this.pages=Math.floor(this.products.length/this.productPerPageModel)+((Math.floor(this.products.length/this.productPerPageModel))===(this.products.length/this.productPerPageModel)?0:1);

    this.productsPages=new Map();
    for(let i=0;i<this.pages;i++){
      this.productsPages.set(i,this.products.slice(i*this.productPerPageModel,Math.min(this.products.length,(i+1)*this.productPerPageModel)))  
      }

      this.pagesKeys=Array.from(this.productsPages.keys());

      console.log(this.productPerPageModel);
      console.log(ppp);
    }

    

}
