import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burguer2Component } from './burguer2.component';

describe('Burguer2Component', () => {
  let component: Burguer2Component;
  let fixture: ComponentFixture<Burguer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Burguer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Burguer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
