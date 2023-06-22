import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossRessourcesBossComponent } from './boss-ressources-boss.component';

describe('BossRessourcesBossComponent', () => {
  let component: BossRessourcesBossComponent;
  let fixture: ComponentFixture<BossRessourcesBossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossRessourcesBossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossRessourcesBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
