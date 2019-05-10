import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameObservableComponent } from './game-observable.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameObservableComponent', () => {
  let component: GameObservableComponent;
  let fixture: ComponentFixture<GameObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GameObservableComponent 
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
