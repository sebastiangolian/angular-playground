import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchResultsComponent } from './page-search-results.component';
import { MovieModule } from 'src/app/movie/movie.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageSearchResultsComponent', () => {
  let component: PageSearchResultsComponent;
  let fixture: ComponentFixture<PageSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSearchResultsComponent ],
      imports: [
        MovieModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
