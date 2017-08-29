import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMovieMusicComponent } from './book-movie-music.component';

describe('BookMovieMusicComponent', () => {
  let component: BookMovieMusicComponent;
  let fixture: ComponentFixture<BookMovieMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMovieMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMovieMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
