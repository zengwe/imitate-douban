import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLeftComponent } from './scroll-left.component';

describe('ScrollLeftComponent', () => {
  let component: ScrollLeftComponent;
  let fixture: ComponentFixture<ScrollLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
