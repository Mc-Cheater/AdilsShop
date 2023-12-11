import { Component, OnDestroy } from '@angular/core';
import { FiltersObservableService } from 'src/app/filters-observable.service';
import { HandleClicksService } from 'src/app/handle-clicks.service';
import { EventKeys } from 'src/app/ibroadcast-event';
import { ProductFetcherService } from 'src/app/product-fetcher.service';

@Component({
  selector: 'app-side-gallery',
  templateUrl: './side-gallery.component.html',
  styleUrls: ['./side-gallery.component.css']
})
export class SideGalleryComponent implements OnDestroy {
constructor(private fetcher:ProductFetcherService,private obeservable:FiltersObservableService
  ){
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
category:string="";

applyFilters(){
 /* this.fetcher.filteredProducts=this.fetcher.filteredProducts.filter((pro)=>{
    return pro.price>this.currentMinPrice &&
    pro.price<this.currentMaxPrice &&
    pro.title.includes(this.title)&&
    pro.description.includes(this.description)&&
    pro.rating.rate>=this.minRate


  })*/

this.obeservable.broadcast(EventKeys.ALL,{
  "minRate":this.minRate,"title":this.title,"description":this.description,
  "minPrice":this.currentMinPrice,"maxPrice":this.currentMaxPrice,"category":this.category

})

}
}
