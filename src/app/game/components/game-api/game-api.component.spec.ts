import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { GameApiComponent } from './game-api.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { GameApiService } from '../../services/game-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('GameApiComponent', () => {
  let component: GameApiComponent;
  let fixture: ComponentFixture<GameApiComponent>;
  let httpBackend: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        GameApiService
      ],
      declarations: [
        GameApiComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    httpBackend = backend;
    fixture = TestBed.createComponent(GameApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // httpBackend
    //   .expectOne({ url: 'http://localhost:3000/api/games/', method: 'GET' }, 'Get list of games')
    //   .flush([
    //     {
    //       "id": 1,
    //       "title": "FIFA",
    //       "price": 100
    //     },
    //     {
    //       "id": 2,
    //       "title": "PES",
    //       "price": 150
    //     },
    //     {
    //       "id": 3,
    //       "title": "WOT",
    //       "price": 0
    //     }
    //   ]);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    httpBackend.verify();
  });
});
