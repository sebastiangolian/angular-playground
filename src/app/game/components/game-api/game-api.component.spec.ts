import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameApiComponent } from './game-api.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameApiComponent', () => {
  let component: GameApiComponent;
  let fixture: ComponentFixture<GameApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GameApiComponent 
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
    fixture = TestBed.createComponent(GameApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
