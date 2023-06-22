import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRessourcesParametricComponent } from './general-ressources-parametric.component';

describe('GeneralRessourcesParametricComponent', () => {
  let component: GeneralRessourcesParametricComponent;
  let fixture: ComponentFixture<GeneralRessourcesParametricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRessourcesParametricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralRessourcesParametricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
