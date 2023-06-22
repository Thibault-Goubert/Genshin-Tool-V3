import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossRessourcesGemsComponent } from './boss-ressources-gems.component';

describe('BossRessourcesGemsComponent', () => {
  let component: BossRessourcesGemsComponent;
  let fixture: ComponentFixture<BossRessourcesGemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossRessourcesGemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossRessourcesGemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
