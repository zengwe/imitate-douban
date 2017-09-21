import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussListComponent } from './discuss-list.component';

describe('DiscussListComponent', () => {
  let component: DiscussListComponent;
  let fixture: ComponentFixture<DiscussListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
