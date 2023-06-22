import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonkaiStarRailPageComponent } from './honkai-star-rail-page.component';

describe('HonkaiStarRailPageComponent', () => {
  let component: HonkaiStarRailPageComponent;
  let fixture: ComponentFixture<HonkaiStarRailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonkaiStarRailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonkaiStarRailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
