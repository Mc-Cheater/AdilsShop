import { Component, Input } from '@angular/core';
import { ProductFetcherService } from '../product-fetcher.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  FilteredProducts=this.fetcher.filteredProducts;
constructor(private fetcher:ProductFetcherService){}


}
