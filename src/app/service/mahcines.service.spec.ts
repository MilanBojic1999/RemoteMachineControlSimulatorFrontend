import { TestBed } from '@angular/core/testing';

import { MachinesService } from './machines.service';

describe('MahcinesService', () => {
  let service: MachinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
