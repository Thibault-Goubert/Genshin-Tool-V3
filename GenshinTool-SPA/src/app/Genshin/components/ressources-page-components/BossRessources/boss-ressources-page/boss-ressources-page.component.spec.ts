import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossRessourcesPageComponent } from './boss-ressources-page.component';

describe('BossRessourcesPageComponent', () => {
  let component: BossRessourcesPageComponent;
  let fixture: ComponentFixture<BossRessourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossRessourcesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossRessourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
