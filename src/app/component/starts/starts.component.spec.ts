import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsComponent } from './starts.component';

describe('StartsComponent', () => {
  let component: StartsComponent;
  let fixture: ComponentFixture<StartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
