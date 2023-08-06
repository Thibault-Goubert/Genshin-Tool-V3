import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageArtefactsPopupComponent } from './manage-artefacts-popup.component';

describe('ManageArtefactsPopupComponent', () => {
  let component: ManageArtefactsPopupComponent;
  let fixture: ComponentFixture<ManageArtefactsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageArtefactsPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageArtefactsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
