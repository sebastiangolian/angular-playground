import { TestBed } from '@angular/core/testing';

import { JphUserService } from './jph-user.service';

describe('JphUserService', () => {
  let service: JphUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JphUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
