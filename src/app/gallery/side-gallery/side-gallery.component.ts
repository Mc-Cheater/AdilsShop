import { Component, OnDestroy } from '@angular/core';
import { ProductFetcherService } from 'src/app/product-fetcher.service';

@Component({
  selector: 'app-side-gallery',
  templateUrl: './side-gallery.component.html',
  styleUrls: ['./side-gallery.component.css']
})
export class SideGalleryComponent implements OnDestroy {
constructor(private fetcher:ProductFetcherService){
  [this.minPrice,this.maxPrice]=fetcher.getMinMaxPrice();
  this.currentMinPrice=this.minPrice;
  this.currentMaxPrice=this.maxPrice;

}
  ngOnDestroy(): void {
    this.fetcher.filteredProducts=this.fetcher.products;
  }

minPrice:number;
maxPrice:number;
currentMinPrice:number;
currentMaxPrice:number;
title:string="";
description:string="";
minRate:number=0;


applyFilters(){
  this.fetcher.filteredProducts=this.fetcher.filteredProducts.filter((pro)=>{
    return pro.price>this.currentMinPrice &&
    pro.price<this.currentMaxPrice &&
    pro.title.includes(this.title)&&
    pro.description.includes(this.description)&&
    pro.rating.rate>=this.minRate


  })
}
}
