import { Injectable } from '@angular/core';
import { Filter } from './filter';
import { Observable, Subject, filter, map } from 'rxjs';
import { EventKeys, IBroadcastEvent } from './ibroadcast-event';
import { IBroadcastFilterEvent } from './ibroadcast-filter-event';

@Injectable({
  providedIn: 'root'
})
export class FiltersObservableService {

  
  
  private _eventBus = new Subject<IBroadcastFilterEvent>();
on(key: EventKeys): Observable<Filter> {
return this._eventBus.asObservable().pipe(
filter(
  event => event.key === key ||
  event.key === EventKeys.ALL),
  map(event => event.data));
  }

  broadcast(key: EventKeys, data: Filter) {
  this._eventBus.next({ key, data });
  }

constructor() { }

}
