import { TestBed } from '@angular/core/testing';

import { PropositionTypeguardService } from './proposition-typeguard.service';

describe('PropositionTypeguardService', () => {
  let service: PropositionTypeguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropositionTypeguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
