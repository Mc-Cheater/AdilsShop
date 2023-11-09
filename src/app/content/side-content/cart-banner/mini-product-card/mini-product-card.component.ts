import { Component, Input } from '@angular/core';
import { CartMemoryService } from 'src/app/cart-memory.service';
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
  quantity:number|undefined=this.servi.pquantity.get(this.produit);
  constructor(private handler:HandleClicksService,private servi:CartMemoryService){}
  removeFromCart()
{

  this.handler.broadcast(EventKeys.REMOVE,this.produit);


}

setQuantity(){
  this.servi.pquantity.set(this.produit,this.quantity??1);
}

}
