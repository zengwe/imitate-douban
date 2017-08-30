import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaComponent } from './drama.component';

describe('DramaComponent', () => {
  let component: DramaComponent;
  let fixture: ComponentFixture<DramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
