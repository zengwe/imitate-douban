import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBreifComponent } from './detail-breif.component';

describe('DetailBreifComponent', () => {
  let component: DetailBreifComponent;
  let fixture: ComponentFixture<DetailBreifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBreifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBreifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
