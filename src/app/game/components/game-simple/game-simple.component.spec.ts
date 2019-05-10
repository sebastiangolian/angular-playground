import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSimpleComponent } from './game-simple.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('GameSimpleComponent', () => {
  let component: GameSimpleComponent;
  let fixture: ComponentFixture<GameSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: 
      [ 
        GameSimpleComponent 
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
    fixture = TestBed.createComponent(GameSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
