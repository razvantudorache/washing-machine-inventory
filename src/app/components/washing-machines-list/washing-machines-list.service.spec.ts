import { TestBed } from '@angular/core/testing';

import { WashingMachinesListService } from './washing-machines-list.service';

describe('WashingMachinesListService', () => {
  let service: WashingMachinesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashingMachinesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
