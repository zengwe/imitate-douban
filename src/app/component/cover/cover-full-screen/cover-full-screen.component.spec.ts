import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverFullScreenComponent } from './cover-full-screen.component';

describe('CoverFullScreenComponent', () => {
  let component: CoverFullScreenComponent;
  let fixture: ComponentFixture<CoverFullScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverFullScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
