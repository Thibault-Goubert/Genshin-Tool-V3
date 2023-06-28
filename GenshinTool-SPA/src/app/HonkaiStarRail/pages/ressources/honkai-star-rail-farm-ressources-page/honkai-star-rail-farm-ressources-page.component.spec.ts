import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonkaiStarRailFarmRessourcesPageComponent } from './honkai-star-rail-farm-ressources-page.component';

describe('HonkaiStarRailFarmRessourcesPageComponent', () => {
  let component: HonkaiStarRailFarmRessourcesPageComponent;
  let fixture: ComponentFixture<HonkaiStarRailFarmRessourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonkaiStarRailFarmRessourcesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonkaiStarRailFarmRessourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
