import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperEightComponent } from './swiper-eight.component';

describe('SwiperEightComponent', () => {
  let component: SwiperEightComponent;
  let fixture: ComponentFixture<SwiperEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
