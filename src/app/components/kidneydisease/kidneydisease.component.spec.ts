import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidneydiseaseComponent } from './kidneydisease.component';

describe('KidneydiseaseComponent', () => {
  let component: KidneydiseaseComponent;
  let fixture: ComponentFixture<KidneydiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidneydiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidneydiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
