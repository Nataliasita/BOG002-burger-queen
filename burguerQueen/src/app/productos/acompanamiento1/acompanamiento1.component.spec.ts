import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acompanamiento1Component } from './acompanamiento1.component';

describe('Acompanamiento1Component', () => {
  let component: Acompanamiento1Component;
  let fixture: ComponentFixture<Acompanamiento1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acompanamiento1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acompanamiento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
