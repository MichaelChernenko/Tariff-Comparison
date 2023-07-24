import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionFormComponent } from './consumption-form.component';

describe('ConsumptionFormComponent', () => {
  let component: ConsumptionFormComponent;
  let fixture: ComponentFixture<ConsumptionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumptionFormComponent]
    });
    fixture = TestBed.createComponent(ConsumptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
