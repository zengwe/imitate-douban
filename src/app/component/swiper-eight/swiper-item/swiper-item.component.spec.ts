import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperItemComponent } from './swiper-item.component';

describe('SwiperItemComponent', () => {
  let component: SwiperItemComponent;
  let fixture: ComponentFixture<SwiperItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
