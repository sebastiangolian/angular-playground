import { TestBed } from '@angular/core/testing';
import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderService);
  });

  it('should set', (done) => {
    service.set('test');
    service.get().subscribe((header) => {
      expect(header).toBe('test');
      done();
    });
  });

  it('should getWithSetTitle', (done) => {
    service.getWithSetTitle().subscribe((header) => {
      expect(header).toBe('');
      done();
    });
  });
});
