import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerItemComponent } from './per-item.component';

describe('PerItemComponent', () => {
  let component: PerItemComponent;
  let fixture: ComponentFixture<PerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
