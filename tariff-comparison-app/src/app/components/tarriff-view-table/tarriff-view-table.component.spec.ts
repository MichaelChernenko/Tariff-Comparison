import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarriffViewTableComponent } from './tariff-view-table.component';

describe('TarriffViewTableComponent', () => {
  let component: TarriffViewTableComponent;
  let fixture: ComponentFixture<TarriffViewTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarriffViewTableComponent]
    });
    fixture = TestBed.createComponent(TarriffViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
