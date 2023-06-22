import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcePanelComponent } from './ressource-panel.component';

describe('RessourcePanelComponent', () => {
  let component: RessourcePanelComponent;
  let fixture: ComponentFixture<RessourcePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourcePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourcePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
