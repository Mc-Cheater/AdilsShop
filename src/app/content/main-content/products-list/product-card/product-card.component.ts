import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductFetcherService } from 'src/app/product-fetcher.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
onclick() {

  this.sliceEnd=(this.sliceEnd===this.produit.description.length)?40:this.produit.description.length;
  
  this.placeholder=(this.sliceEnd===this.produit.description.length)?"masquer":"... suite";

}
  @Input()
  produit!:Product;
  sliceEnd=40;
  placeholder="...suite";


  constructor(private fetcher:ProductFetcherService){
   // this.produit=fetcher.getProductById(1)
  }

}
