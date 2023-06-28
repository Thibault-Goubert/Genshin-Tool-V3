import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonkaiStarRailRessourcesPageComponent } from './honkai-star-rail-ressources-page.component';

describe('HonkaiStarRailRessourcesPageComponent', () => {
  let component: HonkaiStarRailRessourcesPageComponent;
  let fixture: ComponentFixture<HonkaiStarRailRessourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonkaiStarRailRessourcesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonkaiStarRailRessourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
