import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemMiniComponent } from './movie-item-mini.component';

describe('MovieItemMiniComponent', () => {
  let component: MovieItemMiniComponent;
  let fixture: ComponentFixture<MovieItemMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
