import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieProfileComponent } from './page-movie-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieProfileComponent } from '../movie-profile/movie-profile.component';

describe('PageMovieProfileComponent', () => {
  let component: PageMovieProfileComponent;
  let fixture: ComponentFixture<PageMovieProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageMovieProfileComponent,
        MovieProfileComponent
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
    fixture = TestBed.createComponent(PageMovieProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
