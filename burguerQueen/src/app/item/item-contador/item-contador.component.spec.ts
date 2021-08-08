import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContadorComponent } from './item-contador.component';

describe('ItemContadorComponent', () => {
  let component: ItemContadorComponent;
  let fixture: ComponentFixture<ItemContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
