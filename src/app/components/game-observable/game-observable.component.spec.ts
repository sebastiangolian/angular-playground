import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameObservableComponent } from './game-observable.component';

describe('GameObservableComponent', () => {
  let component: GameObservableComponent;
  let fixture: ComponentFixture<GameObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameObservableComponent ]
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
