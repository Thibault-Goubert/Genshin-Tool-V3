import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonkaiStarRailGeneralRessourcesComponent } from './honkai-star-rail-general-ressources.component';

describe('HonkaiStarRailGeneralRessourcesComponent', () => {
  let component: HonkaiStarRailGeneralRessourcesComponent;
  let fixture: ComponentFixture<HonkaiStarRailGeneralRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonkaiStarRailGeneralRessourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonkaiStarRailGeneralRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
