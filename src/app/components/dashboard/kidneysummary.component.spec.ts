import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidneysummaryComponent } from './kidneysummary.component';

describe('KidneysummaryComponent', () => {
  let component: KidneysummaryComponent;
  let fixture: ComponentFixture<KidneysummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidneysummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidneysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
