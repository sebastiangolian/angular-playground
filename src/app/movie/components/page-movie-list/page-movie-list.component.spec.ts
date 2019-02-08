import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieListComponent } from './page-movie-list.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageMovieListComponent,
        MovieListComponent,
        MovieListItemComponent
       ],
      imports: [
        RouterTestingModule,
        SharedModule,
        HttpClientModule
      ]
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
