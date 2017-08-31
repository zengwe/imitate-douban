import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBlockComponent } from './item-block.component';

describe('ItemBlockComponent', () => {
  let component: ItemBlockComponent;
  let fixture: ComponentFixture<ItemBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
