import { Component, Input } from '@angular/core';
import { HandleClicksService } from 'src/app/handle-clicks.service';
import { EventKeys } from 'src/app/ibroadcast-event';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-mini-product-card',
  templateUrl: './mini-product-card.component.html',
  styleUrls: ['./mini-product-card.component.css']
})
export class MiniProductCardComponent {
  @Input()
  public produit!:Product;

  constructor(private handler:HandleClicksService){}
  removeFromCart()
{

  this.handler.broadcast(EventKeys.REMOVE,this.produit);


}


}
