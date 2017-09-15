import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemMaxComponent } from './movie-item-max.component';

describe('MovieItemMaxComponent', () => {
  let component: MovieItemMaxComponent;
  let fixture: ComponentFixture<MovieItemMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
