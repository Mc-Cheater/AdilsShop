import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductFetcherService } from 'src/app/product-fetcher.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  
  produit:Product;

  constructor(private fetcher:ProductFetcherService){
    this.produit=fetcher.getProductById(1)
  }

}
