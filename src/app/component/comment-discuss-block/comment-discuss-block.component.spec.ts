import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDiscussBlockComponent } from './comment-discuss-block.component';

describe('CommentDiscussBlockComponent', () => {
  let component: CommentDiscussBlockComponent;
  let fixture: ComponentFixture<CommentDiscussBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDiscussBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDiscussBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
