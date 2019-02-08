import { TestBed } from '@angular/core/testing';

import { MoviesProviderService } from './movies-provider.service';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MoviesProviderService = TestBed.get(MoviesProviderService);
    expect(service).toBeTruthy();
  });
});
