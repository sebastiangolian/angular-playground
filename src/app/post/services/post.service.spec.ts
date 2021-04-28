import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { map } from 'rxjs/operators';
import { BackendInterceptor } from 'src/app/backend/interceptors/backend.interceptor';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PostService, { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true }],
    });
    service = TestBed.inject(PostService);
  });

  it('should get', (done) => {
    localStorage.clear();
    service
      .get()
      .pipe(map((apiList) => apiList.total))
      .subscribe((total) => {
        expect(total).toBe(3);
        done();
      });
  });

  it('should getById', (done) => {
    localStorage.clear();
    service
      .getById('3hhvtq')
      .pipe(map((api) => api.item))
      .subscribe((item) => {
        expect(item.id).toBe('3hhvtq');
        done();
      });
  });

  it('should delete', (done) => {
    localStorage.clear();
    service.delete('3hhvtq').subscribe(() => {
      service
        .get()
        .pipe(map((apiList) => apiList.total))
        .subscribe((total) => {
          expect(total).toBe(2);
          done();
        });
    });
  });

  it('should update', (done) => {
    localStorage.clear();
    service.update('3hhvtq', { id: '3hhvtq', title: 'updated title', body: 'updated body' }).subscribe(() => {
      service
        .getById('3hhvtq')
        .pipe(map((api) => api.item))
        .subscribe((item) => {
          expect(item.id).toBe('3hhvtq');
          expect(item.title).toBe('updated title');
          expect(item.body).toBe('updated body');
          done();
        });
    });
  });
});
