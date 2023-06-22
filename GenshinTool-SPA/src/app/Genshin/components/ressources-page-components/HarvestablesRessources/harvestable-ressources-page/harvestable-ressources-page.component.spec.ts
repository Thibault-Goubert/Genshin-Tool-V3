import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestableRessourcesPageComponent } from './harvestable-ressources-page.component';

describe('HarvestableRessourcesPageComponent', () => {
  let component: HarvestableRessourcesPageComponent;
  let fixture: ComponentFixture<HarvestableRessourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarvestableRessourcesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarvestableRessourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
