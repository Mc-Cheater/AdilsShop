import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductFetcherService } from 'src/app/product-fetcher.service';
import { HandleClicksService } from 'src/app/handle-clicks.service';
import { EventKeys } from 'src/app/ibroadcast-event';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
onclick() {

  this.sliceEnd=(this.sliceEnd===this.produit.description.length)?40:this.produit.description.length;
  
  this.placeholder=(this.sliceEnd===this.produit.description.length)?"masquer":"... ";

}
  @Input()
  produit!:Product;
  sliceEnd=80;
  placeholder="...";


  constructor(private fetcher:ProductFetcherService,private observerService:HandleClicksService){
   // this.produit=fetcher.getProductById(1)
  }

  onProductAdded(){
    this.observerService.broadcast(EventKeys.SINGLE,this.produit);
  }

}
