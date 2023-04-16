import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRessourcesComponent } from './general-ressources.component';

describe('GeneralRessourcesComponent', () => {
  let component: GeneralRessourcesComponent;
  let fixture: ComponentFixture<GeneralRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRessourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
