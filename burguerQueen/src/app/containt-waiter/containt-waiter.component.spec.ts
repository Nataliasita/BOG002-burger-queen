import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaintWaiterComponent } from './containt-waiter.component';

describe('ContaintWaiterComponent', () => {
  let component: ContaintWaiterComponent;
  let fixture: ComponentFixture<ContaintWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaintWaiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaintWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
