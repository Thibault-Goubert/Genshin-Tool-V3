import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesPageComponent } from './ressources-page.component';

describe('RessourcesPageComponent', () => {
  let component: RessourcesPageComponent;
  let fixture: ComponentFixture<RessourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourcesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
