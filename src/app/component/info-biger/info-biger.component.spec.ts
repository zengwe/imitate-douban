import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBigerComponent } from './info-biger.component';

describe('InfoBigerComponent', () => {
  let component: InfoBigerComponent;
  let fixture: ComponentFixture<InfoBigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
