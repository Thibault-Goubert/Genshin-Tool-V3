import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossRessourcesElementsComponent } from './boss-ressources-elements.component';

describe('BossRessourcesElementsComponent', () => {
  let component: BossRessourcesElementsComponent;
  let fixture: ComponentFixture<BossRessourcesElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossRessourcesElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossRessourcesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
