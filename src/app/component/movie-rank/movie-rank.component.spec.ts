import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRankComponent } from './movie-rank.component';

describe('MovieRankComponent', () => {
  let component: MovieRankComponent;
  let fixture: ComponentFixture<MovieRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
