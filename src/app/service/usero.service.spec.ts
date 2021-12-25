import { TestBed } from '@angular/core/testing';

import { UseroService } from './usero.service';

describe('UseroService', () => {
  let service: UseroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
