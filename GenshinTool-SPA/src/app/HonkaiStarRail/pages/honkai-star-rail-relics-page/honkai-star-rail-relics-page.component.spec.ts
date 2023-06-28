import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonkaiStarRailRelicsPageComponent } from './honkai-star-rail-relics-page.component';

describe('HonkaiStarRailRelicsPageComponent', () => {
  let component: HonkaiStarRailRelicsPageComponent;
  let fixture: ComponentFixture<HonkaiStarRailRelicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonkaiStarRailRelicsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonkaiStarRailRelicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
