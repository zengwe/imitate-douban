import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZContainerComponent } from './z-container.component';

describe('ZContainerComponent', () => {
  let component: ZContainerComponent;
  let fixture: ComponentFixture<ZContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
