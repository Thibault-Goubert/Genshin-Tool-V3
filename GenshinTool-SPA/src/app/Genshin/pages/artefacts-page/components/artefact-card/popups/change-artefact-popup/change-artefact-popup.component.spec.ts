import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeArtefactPopupComponent } from './change-artefact-popup.component';

describe('ChangeArtefactPopupComponent', () => {
  let component: ChangeArtefactPopupComponent;
  let fixture: ComponentFixture<ChangeArtefactPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeArtefactPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeArtefactPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
