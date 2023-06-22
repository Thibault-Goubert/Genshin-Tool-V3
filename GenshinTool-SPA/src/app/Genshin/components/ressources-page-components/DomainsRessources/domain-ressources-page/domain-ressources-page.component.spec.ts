import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainRessourcesPageComponent } from './domain-ressources-page.component';

describe('DomainRessourcesPageComponent', () => {
  let component: DomainRessourcesPageComponent;
  let fixture: ComponentFixture<DomainRessourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainRessourcesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainRessourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

