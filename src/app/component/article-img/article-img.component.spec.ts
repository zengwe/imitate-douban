import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImgComponent } from './article-img.component';

describe('ArticleImgComponent', () => {
  let component: ArticleImgComponent;
  let fixture: ComponentFixture<ArticleImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
