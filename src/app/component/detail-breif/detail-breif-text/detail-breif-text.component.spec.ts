import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBreifTextComponent } from './detail-breif-text.component';

describe('DetailBreifTextComponent', () => {
  let component: DetailBreifTextComponent;
  let fixture: ComponentFixture<DetailBreifTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBreifTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBreifTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
