import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieItemComponent } from './page-movie-item.component';

describe('PageMovieItemComponent', () => {
  let component: PageMovieItemComponent;
  let fixture: ComponentFixture<PageMovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMovieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
