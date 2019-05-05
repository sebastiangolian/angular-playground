import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSimpleComponent } from './game-simple.component';


describe('GameSimpleComponent', () => {
  let component: GameSimpleComponent;
  let fixture: ComponentFixture<GameSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
