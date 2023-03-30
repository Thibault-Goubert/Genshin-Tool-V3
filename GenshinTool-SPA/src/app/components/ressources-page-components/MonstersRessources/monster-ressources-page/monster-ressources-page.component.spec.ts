import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterRessourcesPageComponent } from './monster-ressources-page.component';

describe('MonsterRessourcesPageComponent', () => {
  let component: MonsterRessourcesPageComponent;
  let fixture: ComponentFixture<MonsterRessourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterRessourcesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterRessourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
