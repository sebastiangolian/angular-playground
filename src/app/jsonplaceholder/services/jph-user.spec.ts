import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { JphUserService } from './jph-user.service';

describe('JphUserService', () => {
  let service: JphUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JphUserService],
    });
    service = TestBed.inject(JphUserService);
  });

  it('should get', (done) => {
    service.get().subscribe((items) => {
      expect(items.length).toBe(10);
      done();
    });
  });
});
