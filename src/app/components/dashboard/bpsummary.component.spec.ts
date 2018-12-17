import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpsummaryComponent } from './bpsummary.component';

describe('BpsummaryComponent', () => {
  let component: BpsummaryComponent;
  let fixture: ComponentFixture<BpsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
