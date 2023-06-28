import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsrRessourcePanelComponent } from './hsr-ressource-panel.component';

describe('HsrRessourcePanelComponent', () => {
  let component: HsrRessourcePanelComponent;
  let fixture: ComponentFixture<HsrRessourcePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsrRessourcePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsrRessourcePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
