import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussDetailComponent } from './discuss-detail.component';

describe('DiscussDetailComponent', () => {
  let component: DiscussDetailComponent;
  let fixture: ComponentFixture<DiscussDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
