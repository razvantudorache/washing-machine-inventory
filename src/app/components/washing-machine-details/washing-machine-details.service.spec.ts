import { TestBed } from '@angular/core/testing';

import { WashingMachineDetailsService } from './washing-machine-details.service';

describe('WashingMachineDetailsService', () => {
  let service: WashingMachineDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashingMachineDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
