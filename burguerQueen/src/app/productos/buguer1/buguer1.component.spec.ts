import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buguer1Component } from './buguer1.component';

describe('Buguer1Component', () => {
  let component: Buguer1Component;
  let fixture: ComponentFixture<Buguer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buguer1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Buguer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
