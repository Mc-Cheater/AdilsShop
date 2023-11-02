import { TestBed } from '@angular/core/testing';

import { HandleClicksService } from './handle-clicks.service';

describe('HandleClicksService', () => {
  let service: HandleClicksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleClicksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
