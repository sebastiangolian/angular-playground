import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

describe('PostService', () => {

  let service: PostService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PostService(<any> httpClientSpy);
    TestBed.configureTestingModule({ imports: [HttpClientModule]})
  });

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });

  it('should return an error when the server returns a 404', () => {
    // const errorResponse = new HttpErrorResponse({
    //   error: 'test 404 error',
    //   status: 404, statusText: 'Not Found'
    // });
   
    //httpClientSpy.get.and.returnValue(errorResponse);
    console.log(service.get("1"));
    // service.get("1").subscribe(
    //   heroes => fail('expected an error, not heroes'),
    //   error  => expect(error.message).toContain('test 404 error')
    // );
  });
});
