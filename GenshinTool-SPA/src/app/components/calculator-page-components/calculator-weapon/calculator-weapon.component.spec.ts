import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorWeaponComponent } from './calculator-weapon.component';

describe('CalculatorWeaponComponent', () => {
  let component: CalculatorWeaponComponent;
  let fixture: ComponentFixture<CalculatorWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorWeaponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
