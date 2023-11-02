/*import { Subscription } from "rxjs";
import { HandleClicksService } from "./handle-clicks.service";
import { EventKeys } from "./ibroadcast-event";
import { Product } from "./product";
import * as _ from "underscore";

export class MyListener {

    public reactToEvent(event: Product) :Product {
        return event;
        }


    private eventSubscription: Subscription;
    constructor(
    broadCastService: HandleClicksService,
    eventKey: EventKeys,
    private listenerName: string
    ) {
        
    _.bindAll(this, "reactToEvent");
    this.eventSubscription =
    broadCastService.on(eventKey)
    .subscribe(this.reactToEvent);
    }
   
    public unregister() {
    this.eventSubscription.unsubscribe();
    }
    }*/