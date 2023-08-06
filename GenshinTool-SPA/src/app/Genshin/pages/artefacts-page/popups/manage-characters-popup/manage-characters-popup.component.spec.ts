import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCharactersPopupComponent } from './manage-characters-popup.component';

describe('ManageCharactersPopupComponent', () => {
  let component: ManageCharactersPopupComponent;
  let fixture: ComponentFixture<ManageCharactersPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCharactersPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCharactersPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
