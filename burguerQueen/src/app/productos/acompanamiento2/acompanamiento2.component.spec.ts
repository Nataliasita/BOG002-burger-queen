import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acompanamiento2Component } from './acompanamiento2.component';

describe('Acompanamiento2Component', () => {
  let component: Acompanamiento2Component;
  let fixture: ComponentFixture<Acompanamiento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acompanamiento2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acompanamiento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
