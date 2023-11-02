import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';
import { EventKeys, IBroadcastEvent } from './ibroadcast-event';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class HandleClicksService {

  
  private _eventBus = new Subject<IBroadcastEvent>();
on(key: EventKeys): Observable<Product> {
return this._eventBus.asObservable().pipe(
filter(
  event => event.key === key ||
  event.key === EventKeys.ALL),
  map(event => event.data));
  }

  broadcast(key: EventKeys, data: Product) {
  this._eventBus.next({ key, data });
  }

constructor() { }
}
