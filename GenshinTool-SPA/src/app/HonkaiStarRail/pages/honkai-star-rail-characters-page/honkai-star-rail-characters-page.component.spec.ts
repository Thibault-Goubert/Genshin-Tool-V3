import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonkaiStarRailCharactersPageComponent } from './honkai-star-rail-characters-page.component';

describe('HonkaiStarRailCharactersPageComponent', () => {
  let component: HonkaiStarRailCharactersPageComponent;
  let fixture: ComponentFixture<HonkaiStarRailCharactersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonkaiStarRailCharactersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonkaiStarRailCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
