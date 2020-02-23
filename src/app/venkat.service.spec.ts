import { TestBed } from '@angular/core/testing';

import { VenkatService } from './venkat.service';

describe('VenkatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VenkatService = TestBed.get(VenkatService);
    expect(service).toBeTruthy();
  });
});
