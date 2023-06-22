import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorCharacterComponent } from './calculator-character.component';

describe('CalculatorCharacterComponent', () => {
  let component: CalculatorCharacterComponent;
  let fixture: ComponentFixture<CalculatorCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
