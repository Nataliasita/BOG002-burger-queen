import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaseosaComponent } from './gaseosa.component';

describe('GaseosaComponent', () => {
  let component: GaseosaComponent;
  let fixture: ComponentFixture<GaseosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaseosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaseosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
