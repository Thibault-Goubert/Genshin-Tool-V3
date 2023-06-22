import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPanelListComponent } from './character-panel-list.component';

describe('CharacterPanelListComponent', () => {
  let component: CharacterPanelListComponent;
  let fixture: ComponentFixture<CharacterPanelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPanelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterPanelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
