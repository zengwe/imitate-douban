import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussPageComponent } from './discuss-page.component';

describe('DiscussPageComponent', () => {
  let component: DiscussPageComponent;
  let fixture: ComponentFixture<DiscussPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
