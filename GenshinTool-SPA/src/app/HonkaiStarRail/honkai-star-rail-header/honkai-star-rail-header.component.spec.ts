import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonkaiStarRailHeaderComponent } from './honkai-star-rail-header.component';

describe('HonkaiStarRailHeaderComponent', () => {
  let component: HonkaiStarRailHeaderComponent;
  let fixture: ComponentFixture<HonkaiStarRailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonkaiStarRailHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonkaiStarRailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
