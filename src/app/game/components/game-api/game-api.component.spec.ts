import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameApiComponent } from './game-api.component';

describe('GameApiComponent', () => {
  let component: GameApiComponent;
  let fixture: ComponentFixture<GameApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameApiComponent ]
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
