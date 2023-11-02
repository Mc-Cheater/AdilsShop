import { Product } from "./product";

export interface IBroadcastEvent {

key:EventKeys;
data:Product;



}

export enum EventKeys{
    ALL="all-events",SINGLE="single-event",REMOVE="remove-event"

}