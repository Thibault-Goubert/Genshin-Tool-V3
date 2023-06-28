import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonkaiStarRailNotesPageComponent } from './honkai-star-rail-notes-page.component';

describe('HonkaiStarRailNotesPageComponent', () => {
  let component: HonkaiStarRailNotesPageComponent;
  let fixture: ComponentFixture<HonkaiStarRailNotesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonkaiStarRailNotesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonkaiStarRailNotesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
