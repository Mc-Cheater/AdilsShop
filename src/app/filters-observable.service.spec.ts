import { TestBed } from '@angular/core/testing';

import { FiltersObservableService } from './filters-observable.service';

describe('FiltersObservableService', () => {
  let service: FiltersObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
