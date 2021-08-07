import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burguer3Component } from './burguer3.component';

describe('Burguer3Component', () => {
  let component: Burguer3Component;
  let fixture: ComponentFixture<Burguer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Burguer3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Burguer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
