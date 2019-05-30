import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieListComponent } from './page-movie-list.component';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
