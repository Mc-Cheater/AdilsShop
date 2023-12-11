import { Filter } from "./filter";

export interface IBroadcastFilterEvent {

    key:EventKeys;
    data:Filter;
    
    
    
    }
    
    export enum EventKeys{
        ALL="all-events",SINGLE="single-event",REMOVE="remove-event"
    
    }