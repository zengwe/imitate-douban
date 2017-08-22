import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBriefComponent } from './article-brief.component';

describe('ArticleBriefComponent', () => {
  let component: ArticleBriefComponent;
  let fixture: ComponentFixture<ArticleBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
