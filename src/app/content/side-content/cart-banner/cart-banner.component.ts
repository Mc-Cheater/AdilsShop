import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import * as _ from "underscore";
import { HandleClicksService } from 'src/app/handle-clicks.service';
import { EventKeys } from 'src/app/ibroadcast-event';
import { Product } from 'src/app/product';


@Component({
  selector: 'app-cart-banner',
  templateUrl: './cart-banner.component.html',
  styleUrls: ['./cart-banner.component.css']
})
export class CartBannerComponent {
  private eventSubscription:Subscription;
  public products:Product[]= [];

    private reactToEvent(event: Product) :void {
      if(this.products.includes(event)===false)
      this.products.push(event);
      }

  constructor(private broadcaster:HandleClicksService
    ){
      
      _.bindAll(this, "reactToEvent");
      
      this.eventSubscription =
      broadcaster.on(EventKeys.SINGLE)
      .subscribe(this.reactToEvent);


      _.bindAll(this, "reactToRemove");
      this.eventSubscription =
      broadcaster.on(EventKeys.REMOVE)
      .subscribe(this.reactToRemove);
      }
  reactToRemove(event: Product): void {
    console.log("something is happening here");
    console.log(event);
    //if(this.products.includes(event)===true)
    console.log(this.products);
    this.products=this.products.filter((prod)=>prod.id!==event.id);
    console.log(this.products);  
  }



  
      
  public unregister() {
    this.eventSubscription.unsubscribe();
    }
  
    
    }
      

      
    
  

 
  



  

