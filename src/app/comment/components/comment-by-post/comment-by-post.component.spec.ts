import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentByPostComponent } from './comment-by-post.component';

describe('CommentByPostComponent', () => {
  let component: CommentByPostComponent;
  let fixture: ComponentFixture<CommentByPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentByPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentByPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
